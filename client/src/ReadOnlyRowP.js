import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

const ReadOnlyRowP = ({ contact, handleEditClick, handleDeleteClick }) => {
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
                <td>{contact.bloodg}</td>
                <td>{contact.contactn}</td>
                <td>{contact.emerg}</td>
                <td>{contact.address}</td>
                <td>{contact.mstatus}</td>
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

export default ReadOnlyRowP;