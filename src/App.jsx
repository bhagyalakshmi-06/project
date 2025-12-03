import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";  // or SingleBook
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>

        {/* Login (default page) */}
        <Route path="/" element={<Login />} />

        {/* Signup */}
        <Route path="/signup" element={<Signup />} />

        {/* Home */}
        <Route path="/home" element={<Home />} />

        {/* Book List */}
        <Route path="/books" element={<BookList />} />

        {/* Single Book Details */}
        <Route path="/book/:id" element={<BookDetails />} />

        {/* Profile Page */}
        <Route path="/profile" element={<Profile />} />

        {/* Fallback page */}
        <Route path="*" element={<h1 className="text-center mt-20">Page Not Found</h1>} />

      </Routes>
    </Router>
  );
}

export default App;