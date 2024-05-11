import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import axios from 'axios';
import RecommendationPage from './RecommendationPage';

jest.mock('axios');

describe('RecommendationPage Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [
      { "Book-Title": "Book 1", "Book-Author": "Author 1", "Image-URL-M": "image1.jpg" },
      { "Book-Title": "Book 2", "Book-Author": "Author 2", "Image-URL-M": "image2.jpg" },
    ] });
  });

  it('renders loading state initially', async () => {
    render(<RecommendationPage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
  });

  it('renders recommendations after loading', async () => {
    render(<RecommendationPage />);
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('Author 1')).toBeInTheDocument();
    expect(screen.getByText('Book 2')).toBeInTheDocument();
    expect(screen.getByText('Author 2')).toBeInTheDocument();
  });

  it('handles error when fetching recommendations', async () => {
    axios.get.mockRejectedValueOnce(new Error('Failed to fetch recommendations'));
    render(<RecommendationPage />);
    await waitFor(() => expect(screen.queryByText('Loading...')).not.toBeInTheDocument());
    expect(screen.getByText('Error: Failed to fetch recommendations')).toBeInTheDocument();
  });
});
