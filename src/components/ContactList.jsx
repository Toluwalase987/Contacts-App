import React, { useState } from "react";
import trash from "../Images/trash.png";

export default function ContactList({
  contacts,
  setSelectedContacts,
  selectedContacts,
  deleteById,
}) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleSearchChange(e) {
    const value = e.target.value;
    setSearchTerm(value); // Update the searchTerm directly with the search value
  }

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-list">
      <div className="top-sidebar">
        <h2>Contacts List</h2>
        <div className="searcher">
          <input
            className="search"
            onChange={handleSearchChange}
            value={searchTerm}
            type="text"
            placeholder="Search Contacts"
          />
        </div>
      </div>
      <div className="sidebar">
        {filteredContacts.map((contact) => (
          <div className="info" key={contact.id}>
            <p
              className="side-list"
              onClick={() => {
                setSelectedContacts(contact);
                console.log(contact);
              }}
            >
              <span className="begin">{contact.firstName}</span>
              <span className="shift">{contact.lastName}</span>
            </p>

            <img
              className="trashicon"
              src={trash}
              onClick={() => {
                deleteById(contact.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
