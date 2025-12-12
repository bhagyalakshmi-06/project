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
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-[#2c1b0e]/90 p-12 rounded-3xl shadow-2xl max-w-md w-full backdrop-blur-md border border-[#a67c52]">
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-center text-[#f2d16b] tracking-wider drop-shadow-lg">
          Library Login
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-lg border border-[#a67c52] bg-[#3e2b18]/50 text-[#f2e3c6] placeholder-[#d1bfa7] font-serif focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-lg border border-[#a67c52] bg-[#3e2b18]/50 text-[#f2e3c6] placeholder-[#d1bfa7] font-serif focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#a67c52] text-[#2c1b0e] py-4 rounded-lg font-serif font-bold hover:bg-[#d4af37] hover:text-[#3e2b18] transition-all shadow-md">
            Login
          </button>
        </form>

        <p className="text-center mt-6 text-[#f2d16b] font-serif">
          New User?{" "}
          <span
            onClick={() => nav("/signup")}
            className="cursor-pointer font-bold hover:underline"
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
}
