import { useState } from 'react';
import React from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PatientRegistrationForm() {
    const [name, setName] = useState('');
    const [surname, setSurName] = useState('');
    const [midname, setMidName] = useState('');
    const [iin, setiin] = useState('');
    const [govid, setGovId] = useState('');
    const [email, setEmail] = useState('');
    const [bloodg, setBloodg] = useState('');
    const [mstatus, setMstatus] = useState('');
    const [address, setAddress] = useState('');
    const [emerg, setEmerg] = useState('');
    const [contactn, setContactn] = useState('');
    const [dbirth, setDbirth] = useState(new Date());
    const current = new Date();
    const dreg = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleSuccess = () => {
        setSubmitted(true);
        setShow(true);
    }

    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    const handleSurName = (e) => {
        setSurName(e.target.value);
        setSubmitted(false);
    };

    const handleMidName = (e) => {
        setMidName(e.target.value);
        setSubmitted(false);
    };

    const handleiin = (e) => {
        setiin(e.target.value);
        setSubmitted(false);
    }

    const handleGovId = (e) => {
        setGovId(e.target.value);
        setSubmitted(false);
    }

    const handlebloodg = (e) => {
        setBloodg(e.target.value);
        setSubmitted(false);
    }

    const handleDbirth = (e) => {
        setDbirth(e.target.value);
        setSubmitted(false);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    }
    const handleAddress = (e) => {
        setAddress(e.target.value);
        setSubmitted(false);
    }

    const handleEmerg = (e) => {
        setEmerg(e.target.value);
        setSubmitted(false);
    }

    const handleContactn = (e) => {
        setContactn(e.target.value);
        setSubmitted(false);
    }

    const handleMstatus = (e) => {
        setMstatus(e.target.value);
        setSubmitted(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || surname === '' || midname === '' || dbirth === '' || iin === '' || govid === '' || bloodg === '...' || mstatus === '...' || address === '') {
            setError(true);
        } else {
            setError(false);
            try {
                const body = { dbirth, iin, govid, name, surname, midname, bloodg, emerg, contactn, email, address, mstatus, dreg }
                const response = await fetch("http://localhost:5001/register/patient", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                });
                const jsonData = await response.json();
                console.log(jsonData)
                if (!jsonData.err) {
                    // setError(true);
                    console.log(jsonData.err);
                } else {
                    handleSuccess();
                }
            } catch (error) {
                console.error(error.message)
            }
        }
    };

    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
            </div>
        );
    };


    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields (e-mail is optional)</h1>
            </div>
        );
    };

    return (
    <div>
            <section class="body">
                <section class="con-body">
                      {}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
        <div>      
        <div class="p-3 pt-4">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2 class="text-right">Patient Registration</h2>
                    </div>
        </div>
        <Row>
            <Col class="col-md-6">
                <div class="px-3">
                    <Row class="row mt-2">
                        <Col class="col-md-6"><label class="labels">Name</label><input onChange={handleName} type="text" class="form-control" value={name} placeholder={name}/></Col>
                        <Col class="col-md-6"><label class="labels">Middle Name</label><input onChange={handleMidName} type="text" class="form-control" value={midname} placeholder={midname}/></Col>
                    </Row>
                    <Row>
                        <Col class="col-md-12"><label class="labels">Email</label><input onChange={handleEmail} type="text" class="form-control" value={email} placeholder={email}/></Col>
                    </Row>
                    <Row class="row mt-2">
                        <Col class="col-md-6"><label class="labels">INN number</label><input onChange={handleiin} type="number" class="form-control" value={iin} placeholder={iin}/></Col>
                        <Col class="col-md-6"><label class="labels">Governmental ID number</label><input onChange={handleGovId} type="number" class="form-control" value={govid} placeholder={govid}/></Col>
                    </Row>
                    <Row class="row mt-2">
                        <Col class="col-md-12">  <label className="labels">Blood group</label>
                            <select
                                onChange={handlebloodg}
                                value={bloodg}
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
                            </select></Col>
                    </Row>
                </div>
            </Col>
            <Col class="col-md-6">
                <div class="px-3">
                    <Row class="row mt-2">
                        <Col class="col-md-12"><label class="labels">Surname</label><input onChange={handleSurName} type="text" class="form-control" placeholder={surname} value={surname}/></Col>
                    </Row>
                    <Row class="row mt-2">
                        <Col class="col-md-6"><label class="labels">Address</label><input onChange={handleAddress} type="text" class="form-control" placeholder={address} value={address}/></Col>
                        <Col class="col-md-6"><label class="labels">Date of birth</label><DatePicker selected={dbirth} onChange={(date:Date) => setDbirth(date)} /></Col>
                    </Row>
                    <Row class="row mt-2">
                        <Col class="col-md-6"><label class="labels">Contact Number</label><input onChange={handleContactn} type="text" class="form-control" value={contactn} placeholder="Start from 7"/></Col>
                        <Col class="col-md-6"><label class="labels">Emergency Contact Number</label><input onChange={handleEmerg} type="text" class="form-control" value={emerg} placeholder="Start from 7"/></Col>
                    </Row>
                    <Row class="row mt-2">
                        <Col class="col-md-12"><label className="labels">Maritial status</label>
                                <select
                                    onChange={handleMstatus}
                                    value={mstatus}
                                >
                                    <option>...</option>
                                    <option>Single</option>
                                    <option>Married</option>
                                </select></Col>
                    </Row>
                </div>
            </Col>

        </Row>
       
    </div>
                   
                

                    <button onClick={handleSubmit} className="button" type="submit">
                        Register
                    </button>
                    {/* <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal> */}
                </section>
            </section>
        </div>
    );
}

