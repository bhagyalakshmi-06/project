import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Bookstore</h1>

      <div className="flex gap-4">
        <Link to="/home">Home</Link>
        <Link to="/books">Books</Link>
        <Link to="/profile">Profile</Link>

        {/* FIXED ADMIN DASHBOARD LOGIN LINK */}
        <Link to="/admin/login" className="text-red-400 font-semibold">
          Admin
        </Link>
      </div>
    </nav>
  );
}
