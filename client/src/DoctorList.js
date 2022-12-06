import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import React, { useState, Fragment, useEffect } from "react";
import ReadOnlyRowD from "./ReadOnlyRowD";
import EditableRowD from "./EditableRowD";
// import data from "./mock-data.json";

import Header from "./components/header";
import Footer from "./components/footer";

export default function DoctorList(){
  // const [submitted, setSubmitted] = useState(false);
  //const [error, setError] = useState(false);
  const [contacts, setContacts] = useState([]);
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

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId.id,
      name: editFormData.name,
      surname: editFormData.surname,
      midname: editFormData.midname,
      dbirth: editFormData.dbirth,
      iin: editFormData.iin,
      contactn: editFormData.contactn,
      depid: editFormData.depid,
      specid: editFormData.specid,
    };
    // try{
    //   const response = await fetch(`http://localhost:5000/doctor/${editContactId.id}`, {
    //     method: "PUT",
    //     headers: {"Content-Type": "application/json"},
    //     editFormData: JSON.stringify(editFormData)
    //   });
    //   const jsonData = await response.json();
    //   console.log(jsonData);
    //   if (!jsonData.err) {
    //     setError(true);
    //     console.log(jsonData.err);
    //   } else {
    //     setSubmitted(true);
    //   }
    // } catch(error) {
    //   console.error(error.message);
    // }
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
    <div className="background">
      <Header/>
    <div className= "body">
    <label className ="app-container">
    <h2>Register Doctor</h2>
      
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
               <EditableRowD
                 editFormData={editFormData}
                 handleEditFormChange={handleEditFormChange}
                 handleCancelClick={handleCancelClick}
               />
             ) : (
               <ReadOnlyRowD
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

