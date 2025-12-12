import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const nav = useNavigate();
  const [user, setUser] = useState(null);

  // Book list
  const [books, setBooks] = useState([]);

  // New book fields
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  useEffect(() => {
    const u = JSON.parse(localStorage.getItem("user"));

    if (!u || u.role !== "admin") {
      nav("/admin/login");
      return;
    }

    setUser(u);

    // Load existing books OR mock initial books
    const existingBooks = JSON.parse(localStorage.getItem("books"));

    if (existingBooks) {
      setBooks(existingBooks);
    } else {
      const mockBooks = Array.from({ length: 7 }, (_, i) => ({
        id: i + 1,
        title: `Book ${i + 1}`,
        author: `Author ${i + 1}`,
        rented: Math.random() > 0.5,
      }));

      setBooks(mockBooks);
      localStorage.setItem("books", JSON.stringify(mockBooks));
    }
  }, [nav]);

  // Save to localStorage
  const updateStorage = (updatedBooks) => {
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  // Toggle rental status
  const toggleStatus = (id) => {
    const updated = books.map((b) =>
      b.id === id ? { ...b, rented: !b.rented } : b
    );
    updateStorage(updated);
  };

  // Delete book
  const deleteBook = (id) => {
    const updated = books.filter((b) => b.id !== id);
    updateStorage(updated);
  };

  // Add new book
  const addBook = (e) => {
    e.preventDefault();

    if (!newTitle.trim() || !newAuthor.trim()) {
      alert("Please enter title and author");
      return;
    }

    const newBook = {
      id: books.length + 1,
      title: newTitle,
      author: newAuthor,
      rented: false,
    };

    const updated = [...books, newBook];
    updateStorage(updated);

    setNewTitle("");
    setNewAuthor("");
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    nav("/admin/login");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <button
          onClick={logout}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Add Book Section */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Add New Book</h2>

        <form onSubmit={addBook} className="flex gap-3 flex-wrap">
          <input
            type="text"
            placeholder="Book Title"
            className="p-2 border rounded w-full md:w-1/3"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author Name"
            className="p-2 border rounded w-full md:w-1/3"
            value={newAuthor}
            onChange={(e) => setNewAuthor(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded w-full md:w-auto">
            Add Book
          </button>
        </form>
      </div>

      {/* Books Table */}
      <div className="bg-white rounded shadow overflow-x-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Book List</h2>

        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Author</th>
              <th className="p-2 border">Rental Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="text-center">
                <td className="p-2 border">{book.id}</td>
                <td className="p-2 border">{book.title}</td>
                <td className="p-2 border">{book.author}</td>

                <td
                  className={`p-2 border font-semibold ${
                    book.rented ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {book.rented ? "Rented" : "Available"}
                </td>

                <td className="p-2 border flex justify-center gap-2">
                  <button
                    onClick={() => toggleStatus(book.id)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Toggle
                  </button>

                  <button
                    onClick={() => deleteBook(book.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
