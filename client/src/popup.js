import React,{useState} from 'react'
import { Link , useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
// import LoginPopup from './loginPopup';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Popup(props){
    //console.log(times)
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [contactn, setContactn] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    const handleSurname = (e) => {
        setSurname(e.target.value);
        setSubmitted(false);
    };
    const handleContactn = (e) => {
        setContactn(e.target.value);
        setSubmitted(false);	
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || surname === '' || contactn === ''  ) {
        setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            try {
                //id, start_t, end_t, day, doc_id, pro_id, status
                const body = {name, surname, contactn}
                const response = await fetch("http://localhost:5001/appointment", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
                const jsonData = await response.json();
                console.log(jsonData)
            } catch(error){
                console.error(error.message)
            }
        }
    };
    return(props.trigger) ?
    (
        
        
        <div className='popup'>
            <div className='popup-inner'>
            <Modal.Body style={{marginLeft: 40, marginRight: 40 }}>
						<Form style={{marginBottom: 40}}>
							<div><Form.Label>Appointment</Form.Label></div>
							
							<Form.Group className="mb-3">
								<Form.Label>Name</Form.Label>
								<Form.Control
									type="text"
                                    onChange={handleName}
                                    value={name}
									placeholder="Enter your name"
									autoFocus/>
							</Form.Group>
							<Form.Group className="mb-4">
								<Form.Label>Surname</Form.Label>
								<Form.Control 
								type="text"
                                onChange={handleSurname}
                                value={surname}
								placeholder="Enter your surname"/>
							</Form.Group>
                            <Form.Group className="mb-4">
								<Form.Label>Contact Number</Form.Label>
								<Form.Control 
								type="number"
                                onChange={handleContactn}
                                value={contactn}
								placeholder="Enter your contact number"/>
							</Form.Group>
							<Form.Group className="d-grid mb-3">
								<Button variant="info" size="lg" type="submit">Register</Button>{' '}
							</Form.Group>
							
						</Form>
					</Modal.Body>
                <button onClick={()=>props.setTrigger(false)} class="btn-close button-close" aria-label="Close"></button>
                
                
            </div>
        </div> 
    ):"";
}
