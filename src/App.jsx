import React from "react";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import DisplayContacts from "./components/DisplayContacts";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [allContacts, setAllContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) || []
  );
  const [selectedContacts, setSelectedContacts] = useState(null);
  const [addImage, setAddImage] = useState(null)


  const deleteContacts = (id)=>{
    const deleted = allContacts.filter((contact)=>{
      return contact.id !== id
    });
    setSelectedContacts(null)

    setAllContacts(deleted)
    localStorage.setItem("contacts", JSON.stringify(deleted));
  }
  //   useEffect(() => {
  //   const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retrieveContacts) {
  //     setAllContacts(retrieveContacts);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allContacts));
  // }, [allContacts]);

  return (
    <>
      <Header />
      <AddContact setAllContacts={setAllContacts} setAddImage={setAddImage} />

      <div className="contacts-section">
        <ContactList
          deleteById={deleteContacts}
          contacts={allContacts}
          setSelectedContacts={setSelectedContacts}
          selectedContacts={selectedContacts}
        />
        <DisplayContacts 
          selectedContacts={selectedContacts} 
          deleteById={deleteContacts} 
          contacts={allContacts}
          addImage={addImage} />
      </div>
    </>
  );
}
