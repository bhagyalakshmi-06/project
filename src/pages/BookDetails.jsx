import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const mockBooks = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Book Title ${i + 1}`,
    author: `Author ${i + 1}`,
    year: 2000 + (i % 20),
    genre: ["Fiction", "Mystery", "Sci-Fi", "Romance"][i % 4],
    isbn: `978-0-${Math.floor(100000 + Math.random() * 900000)}`,
    rented: Math.random() > 0.5,
    image: `https://picsum.photos/300/400?random=${i + 1}`,
    description:
      "This is a detailed description for the book. Replace with real content later."
  }));

  const book = mockBooks.find((b) => b.id === Number(id));

  if (!book) return <h2>Book not found</h2>;

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-300 rounded"
      >
        Back
      </button>

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <img
          src={book.image}
          alt={book.title}
          className="w-60 h-80 object-cover rounded mb-4 mx-auto"
        />

        <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
        <p className="text-xl text-gray-700">by {book.author}</p>

        <div className="mt-4 text-gray-600">
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Published Year:</strong> {book.year}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Status:</strong> {book.rented ? "Rented" : "Available"}</p>
        </div>

        <p className="mt-4 text-gray-700">{book.description}</p>

        <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded">
          Request Rental
        </button>
      </div>
    </div>
  );
}
