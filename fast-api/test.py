from fastapi.testclient import TestClient
from main import app  # Assuming your FastAPI app instance is named 'app'

client = TestClient(app)

# Test Case 1: Root Endpoint
def test_root_endpoint():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Welcome to the Book Recommendation System"}

# Test Case 2: Popularity Endpoint
def test_popularity_endpoint():
    response = client.get("/popularity")
    assert response.status_code == 200
    assert len(response.json()) == 20  # Assuming it returns 20 popular books
    # Add more assertions as needed

# Test Case 3: Recommendations Endpoint - Valid Input
def test_recommendations_valid_input():
    book_name = "Harry Potter and the Chamber of Secrets"  # Example valid book name
    response = client.get(f"/recommendations?book_name={book_name}")
    assert response.status_code == 200
    assert len(response.json()) == 5  # Assuming it returns 5 recommendations
    # Add more assertions as needed

# Test Case 4: Recommendations Endpoint - Invalid Input
def test_recommendations_invalid_input():
    invalid_book_name = "Invalid Book Name"
    response = client.get(f"/recommendations?book_name={invalid_book_name}")
    assert response.status_code == 404  # Assuming it returns a 404 status code for invalid input
    # Add more assertions as needed
