import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "./components/header";
import Footer from "./components/footer";
import Container from 'react-bootstrap/Container';
import { useState, Fragment,useEffect } from 'react';
import { Link , useParams} from "react-router-dom";
import data from "./mock-data.json";
import DatePicker from 'react-datepicker';
import ReadOnlyForm from './ReadOnlyForm';
import EditableForm from "./EditableForm";

function FormDoc() {
	const {id} = useParams();
	const [contacts, setContacts] = useState(data);  //Ali scsfa
	const [dbirth, setDbirth] = useState(new Date());
	const [submitted, setSubmitted] = useState(false);
	
	
	const [editFormData, setEditFormData] = useState({
    name: "",
    surname: "",
    midname: "",
    dbirth: "",
    iin:"",
    contactn:"",
    depid:"",
    specid:"",
	email:"",
	address:"",
	govid:"",
	price:"",
	category:"",
	exp:"",
	degree:""
	});

	const [editContactId, setEditContactId] = useState(null); 	
	const handleDbirth = (e) => {
		setDbirth(e.target.value.toUpperCase());
		setSubmitted(false);
	}
	const handleEditFormChange = (event) => {
		event.preventDefault();
	  
		const fieldName = event.target.getAttribute("name");
		  const fieldValue = event.target.value;
	  
		  const newFormData = { ...editFormData };
		  newFormData[fieldName] = fieldValue;
	  
		  setEditFormData(newFormData);
		};

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
			email: editFormData.email,
			address: editFormData.address,
			govid: editFormData.govid,
			price: editFormData.price,
			category: editFormData.category,
			exp: editFormData.exp,
			degree: editFormData.degree
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
			email: contact.email,
			address: contact.address,
			govid: contact.govid,
			price: contact.price,
			category: contact.category,
			exp: contact.exp,
			degree: contact.degree
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

return (
<div className="background">
	<Header/>
	<div className='body'>
	<div className='body-1'>
	{contacts.map((contact)=> (contact.id== id ? ( 
	
		
		<form onSubmit={handleEditFormSubmit}>
		<Fragment>
             {editContactId === contact.id ? (
               <EditableForm
                 editFormData={editFormData}
                 handleEditFormChange={handleEditFormChange}
                 handleCancelClick={handleCancelClick}
               />
             ) : (
               <ReadOnlyForm
                 contact={contact}
                 handleEditClick={handleEditClick}
                 handleDeleteClick={handleDeleteClick}
               />
             )}
           </Fragment>
		</form>
		
		
    
):null))}
</div>
</div>
<Footer/>
</div>
	);
  }
  
  export default FormDoc;