import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [likes, setLikes] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const mockBooks = Array.from({ length: 12 }, (_, i) => ({
      id: i + 1,
      title: `Book ${i + 1}`,
      author: `Author ${i + 1}`,
      isbn: `978-1-${1000 + i}`,
      available: Math.random() > 0.5,
      image: `https://picsum.photos/200/300?random=${i + 1}`,
    }));

    setBooks(mockBooks);
  }, []);

  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sendRentalRequest = (book) => {
    if (!book.available) {
      alert("❌ Book is already rented!");
      return;
    }
    alert("📩 Rental request sent for " + book.title);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">All Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover rounded-md cursor-pointer"
              onClick={() => navigate(`/book/${book.id}`)}
            />

            <h2 className="font-bold text-lg mt-2">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-gray-500 text-sm mt-1">ISBN: {book.isbn}</p>

            <p className="text-sm mt-1">
              Status:
              <span className={book.available ? "text-green-600" : "text-red-600"}>
                {" "}
                {book.available ? "Available" : "Rented"}
              </span>
            </p>

            <div className="flex justify-between items-center mt-4">
              {/* Like Button */}
              <button
                onClick={() => toggleLike(book.id)}
                className={`text-2xl ${
                  likes[book.id] ? "text-red-500" : "text-gray-400"
                }`}
              >
                ❤️
              </button>

              {/* Rent Button */}
              <button
                onClick={() => sendRentalRequest(book)}
                disabled={!book.available}
                className={`px-3 py-1 rounded text-white ${
                  book.available ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Rent
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
