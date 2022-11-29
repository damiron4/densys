import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>{contact.midname}</td>
                <td>{contact.dbirth}</td>
                <td>{contact.iin}</td>
                <td>{contact.contactn}</td>
                <td>{contact.depid}</td>
                <td>{contact.specid}</td>
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