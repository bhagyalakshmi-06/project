import { useParams, useLocation, Link } from "react-router-dom";
import { books } from "../data/books";

const FALLBACK_IMAGE =
  "https://covers.openlibrary.org/b/id/10909258-L.jpg";

export default function SingleBook() {
  const { id } = useParams();
  const location = useLocation();

  // 1️⃣ Try getting book from navigation state
  let book = location.state?.book;

  // 2️⃣ If page refreshed / opened directly → find by ID
  if (!book) {
    book = books.find((b) => b.id === Number(id));
  }

  // 3️⃣ Still not found → show message
  if (!book) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">📕 Book not found</h2>
        <Link to="/" className="text-blue-600 underline mt-4 block">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-[#fff6e3]">
      <Link to="/" className="text-blue-600 underline mb-6 inline-block">
        ← Back to Library
      </Link>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg grid md:grid-cols-2 gap-6">
        <img
          src={book.image}
          alt={book.title}
          onError={(e) => (e.target.src = FALLBACK_IMAGE)}
          className="w-full h-[420px] object-cover rounded-lg"
        />

        <div>
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>
          <p className="text-xl mb-2">by {book.author}</p>

          <p className="mb-2"><b>Genre:</b> {book.genre ?? "Classic"}</p>
          <p className="mb-2"><b>Year:</b> {book.year ?? "N/A"}</p>
          <p className="mb-2"><b>ISBN:</b> {book.isbn}</p>

          <p
            className={`mt-4 font-bold ${
              book.available ? "text-green-600" : "text-red-600"
            }`}
          >
            {book.available ? "Available" : "Currently Rented"}
          </p>
        </div>
      </div>
    </div>
  );
}
