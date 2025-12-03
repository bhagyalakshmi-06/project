import React, { useEffect, useState } from "react";

export default function Home() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  // Mock 30 book objects
  const mockBooks = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Book Title ${i + 1}`,
    author: `Author ${i + 1}`,
    rented: Math.random() > 0.5, // randomly rented
    image: `https://picsum.photos/200/300?random=${i + 1}`, // random image
  }));

  useEffect(() => {
    // Shuffle and pick 20 random books
    const shuffled = [...mockBooks].sort(() => 0.5 - Math.random());
    setBooks(shuffled.slice(0, 20));
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const viewBook = (id) => {
    alert(`Redirect to book details page for book ID: ${id}`);
    // Later: use React Router navigate(`/book/${id}`)
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Bookstore Library</h1>

      {/* Search box */}
      <div className="max-w-md mx-auto mb-6">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Books grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
            onClick={() => viewBook(book.id)}
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover rounded-md mb-3"
            />
            <h2 className="font-bold text-lg">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-gray-500 text-sm mt-1">
              {book.rented ? "Rented" : "Available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
