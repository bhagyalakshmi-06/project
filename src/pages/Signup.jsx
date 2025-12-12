import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [place, setPlace] = useState("");
  const [education, setEducation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !age || !place || !education || !phone || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (!terms) {
      alert("You must accept terms and conditions");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      role: "user",
      name,
      age,
      place,
      education,
      phone,
      email,
      rentedCount: 0,
    };
    localStorage.setItem("user", JSON.stringify(userData));

    alert("Signup successful!");
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
      {/* Overlay to darken background but keep image visible */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative bg-[#3a2314]/90 p-10 rounded-2xl shadow-lg max-w-md w-full backdrop-blur-sm border border-[#a67c52] z-10">
        <h1 className="text-3xl font-serif mb-6 text-center text-[#f2d16b]">
          Signup
        </h1>

        <form onSubmit={handleSignup} className="flex flex-col gap-3">
          <input
            placeholder="Name"
            className="w-full p-3 rounded border border-[#a67c52] bg-[#4a2e1b]/40 text-[#f2e3c6] placeholder-[#d1bfa7] font-serif focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Age"
            type="number"
            className="w-full p-3 rounded border border-[#a67c52] bg-[#4a2e1b]/40 text-[#f2e3c6] placeholder-[#d1bfa7] font-serif focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            placeholder="Place"
            className="w-full p-3 rounded border border-[#a67c52] bg-[#4a2e1b]/40 text-[#f2e3c6] placeholder-[#d1bfa7] font-serif focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
          <input
            placeholder="Education"
            className="w-full p-3 rounded border border-[#a67c52] bg-[#4a2e1b]/40 text-[#f2e3c6] placeholder-[#d1bfa7] font-serif focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
          <input
            placeholder="Phone Number"
            type="number"
            className="w-full p-3 rounded border border-[#a67c52] bg-[#4a2e1b]/40 text-[#f2e3c6] placeholder-[#d1bfa7] font-serif focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            className="w-full p-3 rounded border border-[#a67c52] bg-[#4a2e1b]/40 text-[#f2e3c6] placeholder-[#d1bfa7] font-serif focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            className="w-full p-3 rounded border border-[#a67c52] bg-[#4a2e1b]/40 text-[#f2e3c6] placeholder-[#d1bfa7] font-serif focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            className="w-full p-3 rounded border border-[#a67c52] bg-[#4a2e1b]/40 text-[#f2e3c6] placeholder-[#d1bfa7] font-serif focus:outline-none focus:ring-2 focus:ring-[#d4af37]"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <label className="flex items-center text-[#f2d16b]">
            <input
              type="checkbox"
              checked={terms}
              onChange={() => setTerms(!terms)}
              className="mr-2 accent-[#d4af37] w-5 h-5"
            />
            I accept terms & conditions
          </label>

          <button className="bg-[#a67c52] text-[#3a2314] py-3 rounded font-serif font-semibold hover:bg-[#d4af37] hover:text-[#3a2314] transition-all">
            Signup
          </button>
        </form>

        <p className="text-center mt-4 text-[#f2d16b] font-serif">
          Already a user?{" "}
          <span
            onClick={() => nav("/login")}
            className="cursor-pointer font-semibold hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
