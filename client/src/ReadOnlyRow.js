import React from "react";

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
      </td>
    </tr>
  );
};

export default ReadOnlyRow;