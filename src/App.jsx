import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BookList from "./pages/BookList";
import BookDetails from "./pages/BookDetails";
import AdminDashboard from "./pages/AdminDashboard";

function Layout() {
  const location = useLocation();

  // Pages where Navbar should be hidden
  const hideNavbarPages = ["/", "/login", "/signup", "/admin/login"];
  const hideNavbar = hideNavbarPages.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />} 
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* User pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/books/:id" element={<BookDetails />} /> // matches "/books/1"

        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}  