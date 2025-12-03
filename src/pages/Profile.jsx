import React from "react";

export default function Profile() {
  return (
    <div className="page-container">
      <h2>User Profile</h2>

      <div className="form-box">
        <p>Name:User name</p>
        <p>Email: user123@gmail.com</p>
        <p>Books Rented: </p>

        <button className="btn-sm">Edit Profile</button>
      </div>
    </div>
  )
}
