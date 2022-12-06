import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const ReadOnlyRowD = ({ contact, handleEditClick, handleDeleteClick }) => {
  const NavUnlisted = styled.ul`
  text-decoration: none;
`;
const linkStyle = {
  textDecoration: "none",
  color: 'black'
};


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
        <button type="button"><Link style={linkStyle} className="text-line" to={"/doctors/"+contact.specid}>Link</Link></button>
      </td>
    </tr>
  );
};

export default ReadOnlyRowD;