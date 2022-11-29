import React from "react";
import { Link } from "react-router-dom";
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  
  return (
    <tr>
      <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>{contact.middlename}</td>
                <td>{contact.birthDate}</td>
                <td>{contact.IIN}</td>
                <td>{contact.contactNumber}</td>
                <td>{contact.departmentId}</td>
                <td>{contact.specializationDetailsId}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
        <button type="button"><Link className="text-line" to="/doctorMP/54">Link</Link></button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;