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

    // Validation
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

    // Save user in localStorage
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSignup} className="bg-white p-6 rounded shadow w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Signup</h1>

        <input placeholder="Name" className="w-full p-2 border rounded mb-2" value={name} onChange={(e)=>setName(e.target.value)} />
        <input placeholder="Age" className="w-full p-2 border rounded mb-2" value={age} onChange={(e)=>setAge(e.target.value)} />
        <input placeholder="Place" className="w-full p-2 border rounded mb-2" value={place} onChange={(e)=>setPlace(e.target.value)} />
        <input placeholder="Education" className="w-full p-2 border rounded mb-2" value={education} onChange={(e)=>setEducation(e.target.value)} />
        <input placeholder="Phone Number" className="w-full p-2 border rounded mb-2" value={phone} onChange={(e)=>setPhone(e.target.value)} />
        <input placeholder="Email" type="email" className="w-full p-2 border rounded mb-2" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input placeholder="Password" type="password" className="w-full p-2 border rounded mb-2" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <input placeholder="Confirm Password" type="password" className="w-full p-2 border rounded mb-2" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} />

        <label className="flex items-center mb-2">
          <input type="checkbox" checked={terms} onChange={()=>setTerms(!terms)} className="mr-2" />
          I accept terms & conditions (If book not returned or damaged, fine will be charged)
        </label>

        <button className="bg-blue-600 text-white w-full p-2 rounded mb-2">Signup</button>

        <p className="text-center">
          Already a user? <a href="/login" className="text-blue-600">Login</a><br/>
          Admin? <a href="/admin/login" className="text-red-600">Admin Login</a>
        </p>
      </form>
    </div>
  );
}
