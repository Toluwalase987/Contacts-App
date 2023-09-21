import { useState } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddContact({ setAllContacts }) {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const imageChangeHandler = (e) => {
    const file = e.target.files[0];
    setaddImage(URL.createObjectURL(file));
  };

  function handleChange(e) {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAllContacts((prevData) => {
      localStorage.setItem("contacts", JSON.stringify([...prevData, formData]));
      return [...prevData, formData];
    });
    setFormData({
      id: uuidv4(),
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      image: null,
    });
  }
  return (
    <div className="add-contact">
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <div className="btn-background">
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}
