import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // import useNavigate

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // initialize navigate

  const handleLogin = (e) => {
    e.preventDefault();

    // For now, just mock login: accept any non-empty email/password
    if (email && password) {
      console.log("Logging in:", email, password);

      // Redirect to Home page
      navigate("/home");
    } else {
      alert("Please enter valid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Login
          </button>

          <a href="/signup" className="block text-center text-blue-600 mt-3">
            Create an account
          </a>
        </form>
      </div>
    </div>
  );
}
