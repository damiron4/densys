import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import data from "./mock-data.json";

export default function DoctorMP(){
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    name: "",
    surname: "",
    midname: "",
    dbirth: "",
    iin:"",
    contactn:"",
    depid:"",
    specid:"",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    surname: "",
    midname: "",
    dbirth: "",
    iin:"",
    contactn:"",
    depid:"",
    specid:"",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      name: addFormData.name,
      surname: addFormData.surname,
      midname: addFormData.midname,
      dbirth: addFormData.dbirth,
      iin: addFormData.iin,
      contactn: addFormData.contactn,
      depid: addFormData.depid,
      specid: addFormData.specid,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      surname: editFormData.surname,
      midname: editFormData.midname,
      dbirth: editFormData.dbirth,
      iin: editFormData.iin,
      contactn: editFormData.contactn,
      depid: editFormData.depid,
      specid: editFormData.specid,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      name: contact.name,
      surname: contact.surname,
      midname: contact.midname,
      dbirth: contact.dbirth,
      iin: contact.iin,
      contactn: contact.contactn,
      depid: contact.depid,
      specid: contact.specid,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };  

  
const getDoctors = async () => {
  try {
    const response = await fetch("http://localhost:5000/doctor");
    const jsonData = await response.json();

    setContacts(jsonData);
    console.log(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};

useEffect(() => {
  getDoctors();
}, []);

  return(
    <div>
      <header className="site-header">
          <div class="container">
              <p><ht class="back-ht"><Link className="text-link" to="/">A-Clinic</Link></ht></p>
                <p>Main Page</p>
                <p><Link className="text-link" to="/register-doctor">Register Doctor</Link></p>
                <p><Link className="text-link" to="/register-patient">Register Patient</Link></p>
          </div>
      </header>
    <div className= "features">
    <label className ="app-container">
    <h2>Register Doctor</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="surname"
          required="required"
          placeholder="Enter a surname..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="midname"
          required="required"
          placeholder="Enter a midname..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="dbirth"
          required="required"
          placeholder="Enter a birth date..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="iin"
          required="required"
          placeholder="Enter an iin..."
          onChange={handleAddFormChange}
        />
        <input
           type="text"
           name="contactn"
           required="required"
           placeholder="Enter a contact number.."
           onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="depid"
          required="required"
          placeholder="Enter a department ID..."
          onChange={handleAddFormChange}
        />
        <input
           type="text"
           name="specid"
           required="required"
           placeholder="Enter a specialization details id..."
           onChange={handleAddFormChange}
        />
      
        <button type="submit">Add</button>
      </form>
    <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Middlename</th>
            <th>Birth Date</th>
            <th>IIN</th>
            <th>Contact Number</th>
            <th>Department ID</th>
            <th>Specialization Details ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>  (
             <Fragment>
             {editContactId === contact.id ? (
               <EditableRow
                 editFormData={editFormData}
                 handleEditFormChange={handleEditFormChange}
                 handleCancelClick={handleCancelClick}
               />
             ) : (
               <ReadOnlyRow
                 contact={contact}
                 handleEditClick={handleEditClick}
                 handleDeleteClick={handleDeleteClick}
               />
             )}
           </Fragment>
          ))}
        </tbody>
      </table>
      </form>
      
      </label>
      
      </div>
        <footer class="site-footer">
          <div class="con">
            <p>© A-Clinic</p>
            <p>Welcome to A-Clinic, Health Care website</p>
          </div>
        </footer>
      
      </div>
    )
        
}
