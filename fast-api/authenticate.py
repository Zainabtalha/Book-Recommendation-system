from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from flask_cors import CORS
import json

file_path = r'E:\semester6\Projec_SE\fast-api\savedata.json'

# Open the JSON file and load its contents
with open(file_path, 'r') as file:
    authenticate = json.load(file)

app = Flask(__name__, template_folder='.')
CORS(app)  # Add this line to enable CORS for all routes
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins='*')

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('login')
def on_login(data):
    if verify_credentials(data['username'], data['password']):
        emit('login_success', {'user_id': data['username']})
    else:
        emit('login_error', {'message': 'Invalid credentials'})

def verify_credentials(username, password):
    if authenticate[username] == password:
        return True
    else:
        return False

if __name__ == '__main__':
    socketio.run(app)
