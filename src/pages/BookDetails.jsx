import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const vintageBooks = [
    { id: 1, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance", isbn: "9780141040349", rented: true, image: "https://images.unsplash.com/photo-1544936207-387e4c9f1972", description: "A classic novel about manners, marriage, and societal expectations." },
    { id: 2, title: "Moby Dick", author: "Herman Melville", year: 1851, genre: "Adventure", isbn: "9781503280786", rented: false, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93", description: "The epic tale of Captain Ahab and his obsessive quest for the white whale." },
    // … include all 20 books with same structure
  ];

  const book = vintageBooks.find((b) => b.id === Number(id));
  if (!book) return <h2>Book not found</h2>;

  return (
    <div className="p-6">
      <button onClick={() => navigate(-1)} className="mb-4 px-4 py-2 bg-gray-300 rounded">
        Back
      </button>
      <div className="max-w-3xl mx-auto bg-[#fdf6e3] p-6 rounded-xl shadow-lg">
        <img src={book.image} alt={book.title} className="w-60 h-80 object-cover rounded mb-4 mx-auto" />
        <h1 className="text-3xl font-serif font-bold mb-2 text-[#8b5e3c]">{book.title}</h1>
        <p className="text-xl text-[#6b4a2e] mb-2">by {book.author}</p>
        <div className="text-[#6b4a2e]">
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Published Year:</strong> {book.year}</p>
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Status:</strong> {book.rented ? "Rented" : "Available"}</p>
        </div>
        <p className="mt-4 text-[#6b4a2e]">{book.description}</p>
        <button className="mt-6 w-full bg-[#e3c17a] text-[#4a2e1b] py-3 rounded font-serif font-semibold hover:bg-[#d4af37] transition">
          Request Rental
        </button>
      </div>
    </div>
  );
}
