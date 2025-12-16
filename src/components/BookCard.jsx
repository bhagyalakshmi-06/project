import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FALLBACK =
  "https://covers.openlibrary.org/b/id/10909258-L.jpg";

export default function BookCard({ book }) {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  
  const viewBook = () => {
    navigate(`/book/${book.id}`, { state: { book } }); // "/book/:id" matches App.jsx
  };
  
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition cursor-pointer">
      <img
        src={book.image}
        onError={(e) => (e.target.src = FALLBACK)}
        alt={book.title}
        className="h-56 w-full object-cover rounded-lg"
      />

      <h2 className="mt-3 font-bold text-lg">{book.title}</h2>
      <p className="text-gray-600">{book.author}</p>

      {/* ❤️ LIKE */}
      <button
        onClick={() => setLiked(!liked)}
        className="mt-2 text-xl"
      >
        {liked ? "❤️" : "🤍"}
      </button>

      {/* VIEW */}
      <button
        onClick={viewBook}
        className="block mt-3 w-full bg-[#d4af37] text-white text-center py-2 rounded"
      >
        View Book
      </button>
    </div>
  );
}
