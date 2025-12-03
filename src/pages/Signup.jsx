import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    const submit = (e) => {
        e.preventDefault();
        alert("Signup successful!");
        navigate("/login");
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4">Signup</h2>

            <form onSubmit={submit} className="grid grid-cols-2 gap-4">
                <input className="border p-2 rounded" placeholder="Name" />
                <input className="border p-2 rounded" placeholder="Place" />
                <input className="border p-2 rounded" placeholder="Age" />
                <input className="border p-2 rounded" placeholder="Email" />
                <input className="border p-2 rounded" placeholder="Education" />
                <input className="border p-2 rounded" placeholder="Phone Number" />

                <label className="col-span-2 flex items-center gap-2">
                    <input type="checkbox" />
                    Accept Terms & Conditions
                </label>

                <button className="col-span-2 bg-green-600 text-white p-2 rounded">
                    Signup
                </button>
            </form>
        </div>
    )
}

export default Signup;
