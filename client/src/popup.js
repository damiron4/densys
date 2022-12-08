import React,{useState} from 'react'

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
    const [name, setName] = useState('');
    const [contactn, setContactn] = useState('');
    const [iin, setiin] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    const handleiin = (e) => {
        setiin(e.target.value);
        setSubmitted(false);
    };
    const handleContactn = (e) => {
        setContactn(e.target.value);
        setSubmitted(false);	
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || iin === '' || contactn === ''  ) {
        setError(true);
        } else {
            setSubmitted(true);
            setError(false);
            try {
                const body = {iin, name, contactn}
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
								<Form.Label>IIN number</Form.Label>
								<Form.Control 
								type="number"
                                maxLength={12}
                                onChange={handleiin}
                                value={iin}
								placeholder="Enter your IIN number"/>
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
