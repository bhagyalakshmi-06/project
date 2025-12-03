import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">
        <Link to="/">📚 Bookstore</Link>
      </h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/books" className="hover:text-gray-200">Books</Link>
        <Link to="/profile" className="hover:text-gray-200">Profile</Link>
        <Link to="/admin" className="hover:text-gray-200">Admin</Link>
        <Link to="/login" className="hover:text-yellow-300 font-semibold">Login</Link>
      </div>
    </nav>
  );
}
