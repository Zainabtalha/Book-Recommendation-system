from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pickle
import numpy as np
import pandas as pd
import json

file = open('popular.pkl','rb')
popular_df = pickle.load(file)

file1 = open('pivotTable.pkl','rb')
pivot_table = pickle.load(file1)

file2 = open('score.pkl','rb')
score = pickle.load(file2)

file3 = open('books.pkl','rb')
books = pickle.load(file3)

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)
# @app.websocket("/ws")
# async def websocket_endpoint(websocket:WebSocket):
#    print("accepting Connection")
#    await websocket.accept()
#    print("WebSocket connection established")
#    while True:
#       try:
#          data = await websocket.receive_text()
#          await websocket.send_text("sending from Server")
#          print(data)
#       except:
#          pass
#          break
      
@app.get("/") # this is how we make routes by making a decorator function and then calling its http methods
def root():
    print(books)
    return {"hello"}

@app.get("/popularity")
def book():
    data = popular_df[['Book-Title','Book-Author','Image-URL-M','Rating Count','Avg_Rating']].head(20).to_dict(orient='records')
    return data



@app.get("/recommendations")
def recommend(book_name:str):

  index=np.where(pivot_table.index==book_name)[0][0]
  distances=sorted(list(enumerate(score[index])),key=lambda x:x[1],reverse=True)[1:6]

  data = {}
  j=0
  for i in distances:
    item = {}
    temp_df = books[books['Book-Title']==pivot_table.index[i[0]]]
    item['Book Title']=(list(temp_df.drop_duplicates('Book-Title')['Book-Title'].values)[0])
    item['Book Author']=(list(temp_df.drop_duplicates('Book-Title')['Book-Author'].values)[0])
    item['Book Image']=(list(temp_df.drop_duplicates('Book-Title')['Image-URL-M'].values)[0])
    
    data[j]=item
    j=j+1
  return data