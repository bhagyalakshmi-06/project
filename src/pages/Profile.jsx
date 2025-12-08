import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const nav = useNavigate();
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.role !== "user") {
      nav("/login");
      return;
    }
    setUser(storedUser);
  }, [nav]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const saveChanges = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setEditMode(false);
    alert("Profile updated successfully!");
  };

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">My Profile</h1>

      <div className="space-y-3">
        {["name","age","place","education","phone","email"].map((field) => (
          <ProfileField
            key={field}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            value={user[field]}
            editable={editMode}
            onChange={handleChange}
          />
        ))}

        <div className="bg-gray-100 p-3 rounded">
          <label className="block font-semibold">Books Rented</label>
          <p className="text-gray-700">{user.rentedCount || 0}</p>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        {!editMode ? (
          <button onClick={()=>setEditMode(true)} className="bg-blue-600 text-white px-4 py-2 rounded">Edit Profile</button>
        ) : (
          <button onClick={saveChanges} className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
        )}
        <button onClick={() => {localStorage.removeItem("user"); nav("/login");}} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
    </div>
  );
}

function ProfileField({ label, name, value, editable, onChange }) {
  return (
    <div>
      <label className="font-semibold">{label}</label>
      {editable ? (
        <input name={name} value={value} onChange={onChange} className="w-full p-2 border rounded mt-1" />
      ) : (
        <p className="p-2 border rounded mt-1 bg-gray-50">{value}</p>
      )}
    </div>
  );
}
