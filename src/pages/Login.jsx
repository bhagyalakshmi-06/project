import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.role !== "user" || user.email !== email) {
      alert("Invalid credentials");
      return;
    }

    nav("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">User Login</h1>
        <input type="email" placeholder="Email" className="w-full p-2 border rounded mb-2" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded mb-2" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white w-full p-2 rounded mb-2">Login</button>
      </form>
    </div>
  );
}
