import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const nav = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    setUser(u);
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    nav("/login");
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
      <Link to="/home" className="text-xl font-bold">📚 BookStore</Link>

      <div className="flex gap-6 items-center">
        {user?.role === "user" && (
          <>
            <Link to="/home" className="hover:underline">Home</Link>
            <Link to="/books" className="hover:underline">Books</Link>
            <Link to="/profile" className="hover:underline">Profile</Link>
          </>
        )}

        {user?.role === "admin" && (
          <>
            <Link to="/admin/dashboard" className="hover:underline">Admin Dashboard</Link>
          </>
        )}

        {!user ? (
          <Link to="/login" className="bg-white text-blue-600 px-4 py-1 rounded hover:bg-gray-200">Login</Link>
        ) : (
          <button onClick={logout} className="bg-red-500 px-4 py-1 rounded hover:bg-red-600">Logout</button>
        )}
      </div>
    </nav>
  );
}
