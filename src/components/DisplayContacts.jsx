import React from "react"
import image from '../Images/avatar.png'

export default function DisplayContacts({selectedContacts, deleteById, contacts}){
    

    function handleSubmit(){
        deleteById(contacts.id)
    }
    return(
       <div className="content">
        {selectedContacts !== null ? 
            <div className="display">
                <div className="details" >
                    <img className="avatar" src={image}/>
                    <h2>{selectedContacts.firstName} {selectedContacts.lastName}</h2>
                    <h3>{selectedContacts.email}</h3>
                    <h4>{selectedContacts.phoneNumber}</h4> 
                </div>
            </div>
        : <h2 className="display">Please Select a Contact</h2> }
       </div>
        
    )
    }