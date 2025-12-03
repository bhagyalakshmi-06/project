import React from "react";

export default function AdminDashboard() {
  const books = [
    { id: 1, title: "Book A", rented: false },
    { id: 2, title: "Book B", rented: true },
  ];

  return (
    <div className="page-container">
      <h2>Admin Dashboard</h2>

      {books.map((b) => (
        <div className="book-card" key={b.id}>
          <h3>{b.title}</h3>
          <p>Status: {b.rented ? "Rented" : "Available"}</p>
          <button className="btn-sm">Change Status</button>
          <button className="btn-sm delete">Delete</button>
        </div>
      ))}
    </div>
  );
}
