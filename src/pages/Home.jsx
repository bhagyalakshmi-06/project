import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  // Mock 30 book objects
  const mockBooks = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Book Title ${i + 1}`,
    author: `Author ${i + 1}`,
    year: 2000 + i,
    genre: "Fiction",
    isbn: `978-3-16-${1000 + i}`,
    rented: Math.random() > 0.5,
    image: `https://picsum.photos/200/300?random=${i + 1}`,
  }));

  useEffect(() => {
    const shuffled = [...mockBooks].sort(() => 0.5 - Math.random());
    setBooks(shuffled.slice(0, 20));
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  const viewBook = (id) => {
    nav(`/book/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800 drop-shadow-md">
        FastReach Library
      </h1>

      {/* Search box */}
      <div className="max-w-lg mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md"
        />
      </div>

      {/* Books grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer transition transform hover:-translate-y-1"
            onClick={() => viewBook(book.id)}
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-60 object-cover rounded-xl mb-3"
            />
            <h2 className="font-bold text-lg text-blue-700">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-gray-500 text-sm mt-1">Genre: {book.genre}</p>
            <p className="text-gray-500 text-sm">Year: {book.year}</p>
            <p className="text-gray-500 text-sm">ISBN: {book.isbn}</p>
            <p
              className={`mt-2 font-semibold ${
                book.rented ? "text-red-600" : "text-green-600"
              }`}
            >
              {book.rented ? "Rented" : "Available"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
