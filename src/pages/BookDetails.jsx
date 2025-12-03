// pages/BookList.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Generate 20 fake books
    const fakeBooks = Array.from({ length: 20 }).map((_, index) => ({
      id: index + 1,
      title: `Book Title ${index + 1}`,
      author: `Author ${index + 1}`,

      // FIXED → shorter 13-digit ISBN
      isbn: `978-${Math.floor(100000000000 + Math.random() * 900000000000)}`,

      year: 1990 + Math.floor(Math.random() * 30),
      image: `https://picsum.photos/200/300?random=${index + 1}`,
      description: "This is a fake book description."
    }));

    setBooks(fakeBooks);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Book List</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <Link
            to={`/book/${book.id}`}
            key={book.id}
            className="border rounded shadow hover:shadow-lg transition p-3"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover rounded"
            />

            <h2 className="text-lg font-semibold mt-2">{book.title}</h2>

            <p className="text-sm text-gray-600">Author: {book.author}</p>

            {/* FIXED — ISBN now always visible */}
            <p className="text-sm text-gray-600 break-all">
              ISBN: {book.isbn}
            </p>

            <p className="text-sm text-gray-600">Year: {book.year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
