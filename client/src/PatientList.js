import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import React, { useState, Fragment, useEffect } from "react";
import ReadOnlyRowP from "./ReadOnlyRowP";
import EditableRowP from "./EditableRowP";
// import data from "./mock-data.json";

import Header from "./components/header";
import Footer from "./components/footer";


export default function PatientList(){
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    name: "",
    surname: "",
    midname: "",
    dbirth: "",
    iin:"",
    bloodg:"",
    contactn:"",
    emerg:"",
    address:"",
    mstatus:"",
  });

  const [editFormData, setEditFormData] = useState({
    name: "",
    surname: "",
    midname: "",
    dbirth: "",
    iin:"",
    bloodg:"",
    contactn:"",
    emerg:"",
    address:"",
    mstatus:"",
  });

  const [editContactId, setEditContactId] = useState(null);

 

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

    // const newContact = {
    //   id: nanoid(),
    //   name: addFormData.name,
    //   surname: addFormData.surname,
    //   middlename: addFormData.middlename,
    //   birthDate: addFormData.birthDate,
    //   IIN: addFormData.IIN,
    //   contactNumber: addFormData.contactNumber,
    //   departmentId: addFormData.departmentId,
    //   specializationDetailsId: addFormData.specializationDetailsId,
    // };
  }

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      name: editFormData.name,
      surname: editFormData.surname,
      midname: editFormData.midname,
      dbirth: editFormData.dbirth,
      iin: editFormData.iin,
      bloodg:editFormData.bloodg,
      contactn: editFormData.contactn,
      emerg:editFormData.emerg,
      address:editFormData.address,
      mstatus:editFormData.mstatus,
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
      bloodg: contact.bloodg,
      contactn: contact.contactn,
      emerg:contact.emerg,
      address:contact.address,
      mstatus:contact.mstatus,
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

const uploadPatients = async() =>{
  const response = await fetch("http://localhost:5001/patient/${editContactId.id}");
}
const getPatients = async () => {
  try {
    const response = await fetch("http://localhost:5001/patient");
    const jsonData = await response.json();

    setContacts(jsonData);
    console.log(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};

useEffect(() => {
  
  getPatients();
}, []);

  return(
    <div className="background">
      <Header/>
      
    <div className= "body">
    <label className ="app-container">
    <h2>Register Patient</h2>
      
    <form onSubmit={handleEditFormSubmit}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Middlename</th>
            <th>Birth Date</th>
            <th>IIN</th>
            <th>Blood Group</th>
            <th>Contact Number</th>
            <th>Emergency contact Number</th>
            <th>Address</th>
            <th>Maritial status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact)=>  (
             <Fragment>
             {editContactId === contact.id ? (
               <EditableRowP
                 editFormData={editFormData}
                 handleEditFormChange={handleEditFormChange}
                 handleCancelClick={handleCancelClick}
               />
             ) : (
               <ReadOnlyRowP
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
        <Footer/>
      </div>
    )
        
}

