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
  const hideNavbarPages = ["/login", "/signup", "/admin/login"];
  const hideNavbar = hideNavbarPages.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* User Pages */}
        <Route path="/home" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin Pages */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
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
