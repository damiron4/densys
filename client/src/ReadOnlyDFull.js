Аян 😧🥸, [6 дек. 2022 г., 17:14:30]:
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import Card from 'react-bootstrap/Card';
import Tenma_doctor from './image/Tenma.jfif';
import { useState } from 'react';

const ReadOnlyDFull = ({ contact, handleEditClick, handleDeleteClick }) => {
  const NavUnlisted = styled.ul`
  text-decoration: none;
`;
const linkStyle = {
  textDecoration: "none",
  color: 'black'
};
const [photo, SetPhoto] =  useState('');
const handlePhoto = (e) => {
  console.log(e.target.files)
  SetPhoto(e.target.files[0]);
  
}

const [submitted, setSubmitted] = useState(false);

return (
  <div >
  <section class= "body">
  <section class="con-body">
    <div>
      <h1>Doctor Information</h1>
    </div>
    <div class="container">
      <div>
        <label className="label">Name</label>
        <input onChange={contact.name} className="input"
        value={contact.name} type="text" />
      
        <label className="label">Surname</label>
        <input onChange={contact.surname} className="input"
        value={contact.surname} type="text" />

        <label className="label">Middlename</label>
        <input onChange={contact.surname} className="input"
        value={contact.surname} type="text" />

        <label className="label">Date of birth</label>
        <input onChange={contact.dbirth} className="input"
        value={contact.dbirth} type="text" />
      </div>
     
    </div>
    
    <div class="container">
      <div>
        <label className="label">Email</label>
        <input onChange={contact.email} className="input"
        value={contact.email} type="email" />
      </div>
      <div>
          <label className="label-c">Photo</label>
          <input type="file" name='file'
          onChange={handlePhoto}/>
        </div>
      </div>
      <div class="container">
        <div>
          <label className="label">Department ID</label>
          <input onChange={contact.depid} className="input"
          value={contact.depid} type="number" />
        </div><div>
          <label className="label">Address</label>
          <input onChange={contact.address} className="input"
          value={contact.address} type="text" />
        </div>
      </div>
      <div class="container">
        <div>
          <label className="label">IIN number</label>
          <input   onChange={contact.iin} className="input" 
          value={contact.iin} type="number" />
        </div><div>
          <label className="label">Governmental ID number</label>
          <input onChange={contact.govid} className="input" 
          value={contact.govid} type="number" />
        </div>
      </div>
      <div class="container">
        <div>
          <label className="label">Contact number</label>
          <input onChange={contact.contactn} className="input"
          value={contact.contactn} type="number" />
        </div><div>
          <label className="label">Price of the appointment (Tenge)</label>
          <input onChange={contact.price} className="input"
          value={contact.price} type="number" />
        </div>
      </div>
      <div class="container">
        <div>
          <label className="label">Category</label>
          <input onChange={contact.category} className="input"
          value={contact.category} type="text" />
        </div><div>
          <label className="label">Specialization details ID</label>
          <input onChange={contact.specid} className="input"
          value={contact.specid} type="number" />
        </div>
      </div>
      <div class="container">
        <div>
          <label className="label">Experience in years</label>
          <input onChange={contact.exp} className="input"
          value={contact.exp} type="number" />
        </div><div>
          <label className="label">Degree/education</label>  
          
          <input onChange={contact.degree} className="input"
          value={contact.degree}
          />  
          
        </div>
      
   </div>

<button
  type="button"
  onClick={(event) => handleEditClick(event, contact)}
>
  Edit
</button>
<button type="button" onClick={() => handleDeleteClick(contact.id)}>
  Delete
</button>
<button type="button"><Link style={linkStyle} className="text-line" to={"/doctorMP/"+contact.id}>Link</Link></button> 

  </section>
</section>
  </div>
);



};

export default ReadOnlyDFull;