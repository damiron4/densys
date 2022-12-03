import React from "react";

const EditableRowP = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a surname..."
          name="surname"
          value={editFormData.surname}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a middlename..."
          name="midname"
          value={editFormData.midname}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a birth date..."
          name="dbirth"
          value={editFormData.dbirth}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an IIN..."
          name="iin"
          value={editFormData.iin}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <select
          type="text"
          required="required"
          placeholder="Enter a blood group..."
          name="bloodg"
          value={editFormData.bloodg}
          onChange={handleEditFormChange}
        >	
						<option>...</option>
						<option>A+</option>
						<option>A-</option>
						<option>B+</option>
						<option>B-</option>
						<option>AB+</option>
						<option>AB-</option>
						<option>O+</option>
						<option>O-</option>
					</select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a contact number.."
          name="contactn"
          value={editFormData.contactn}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an emergency contact number.."
          name="emerg"
          value={editFormData.emerg}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address.."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <select
          type="text"
          required="required"
          name="mstatus"
          value={editFormData.mstatus}
          onChange={handleEditFormChange}
          >	
						<option>...</option>
						<option>Single</option>
						<option>Married</option>
        </select>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRowP;