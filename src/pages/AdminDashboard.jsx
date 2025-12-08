import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const nav = useNavigate();
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));
    if (!u || u.role !== "admin") nav("/admin/login");
    else setUser(u);

    // Mock books for admin view
    const mockBooks = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Book ${i + 1}`,
      author: `Author ${i + 1}`,
      rented: Math.random() > 0.5,
    }));
    setBooks(mockBooks);
  }, [nav]);

  const toggleStatus = (id) => {
    setBooks(books.map(b => b.id === id ? { ...b, rented: !b.rented } : b));
  };

  const logout = () => {
    localStorage.removeItem("user");
    nav("/admin/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded mb-4">Logout</button>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Author</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id} className="text-center">
              <td className="p-2 border">{book.id}</td>
              <td className="p-2 border">{book.title}</td>
              <td className="p-2 border">{book.author}</td>
              <td className="p-2 border">{book.rented ? "Rented" : "Available"}</td>
              <td className="p-2 border">
                <button
                  onClick={() => toggleStatus(book.id)}
                  className="bg-blue-600 text-white px-2 py-1 rounded"
                >
                  Toggle Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
