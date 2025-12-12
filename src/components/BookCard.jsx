import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="bg-[#fdf6e3] p-5 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 border border-[#e3d4b9]">
      <h2 className="text-xl font-serif font-bold text-[#8b5e3c]">{book.title}</h2>
      <p className="text-[#6b4a2e] mt-1">{book.author}</p>

      <span
        className={`inline-block mt-3 px-3 py-1 rounded text-sm font-semibold ${
          book.available
            ? "bg-green-200 text-green-800"
            : "bg-red-200 text-red-800"
        }`}
      >
        {book.available ? "Available" : "Rented"}
      </span>

      <Link
        to={`/books/${book.id}`}
        className="block mt-4 bg-[#e3c17a] text-[#4a2e1b] px-4 py-2 rounded font-serif font-semibold text-center hover:bg-[#d4af37] hover:text-[#3a2314] transition"
      >
        View Book
      </Link>
    </div>
  );
};

export default BookCard;
