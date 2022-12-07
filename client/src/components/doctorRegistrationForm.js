import { useState } from 'react';
import React from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import BackFon from '../image/BackFon.jpg';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// TODO: Delete rating from form
export default function DoctorRegistrationForm() {
	const [name, setName] = useState('');
	const [surname, setSurName] = useState('');
	const [midname, setMidName] = useState('');
	const [iin, setiin] = useState('');
	const [govid, setGovId] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [contactn, setContactn] = useState('');
	const [dbirth, setDbirth] = useState(new Date());
	const [password, setPassword] = useState('');
	const [depid, SetDepid] =  useState('');
	const [specid, SetSpecid] =  useState('');
	const [exper, SetExper] =  useState('');
	const [price, SetPrice] =  useState('');
	const [category, SetCategory] =  useState('');
	const [degree, SetDegree] =  useState('');
	const [rating, SetRating] =  useState(0);
	const [photo, SetPhoto] =  useState('');
	const [scheduledetails, setScheduledetails] =  useState(0);
	const [hpurl, setHomepageURL] =  useState(''); 
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

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

	const handleDbirth = (e) => {
		setDbirth(e.target.value.toUpperCase());
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

	const handleContactn = (e) => {
		setContactn(e.target.value);
		setSubmitted(false);	
	}

	const handleDepid = (e) => {
		SetDepid(e.target.value);
		setSubmitted(false);	
	}

	const handleSpecid = (e) => {
		SetSpecid(e.target.value);
		setSubmitted(false);	
	}

	const handleExper = (e) => {
		SetExper(e.target.value);
		setSubmitted(false);	
	}

	const handlePrice = (e) => {
		SetPrice(e.target.value);
		setSubmitted(false);	
	}


	const handleCategory = (e) => {
		SetCategory(e.target.value);
		setSubmitted(false);	
	}

	const handleDegree = (e) => {
		SetDegree(e.target.value);
		setSubmitted(false);	
	}

	const handleRating = (e) => {
		SetRating(e.target.value);
		setSubmitted(false);	
	}

	const handlePhoto = (e) => {
		console.log(e.target.files)
		SetPhoto(e.target.files[0]);
		setSubmitted(false);	
	}

	const handleSubmit = async e => {
		e.preventDefault();
		if (name === '' || surname === '' || midname === '' || iin === '' || govid === '' || address === '' || degree === '...' || photo === '') {
		setError(true);
		} else {		
			try {
				const body = {dbirth, iin, govid, name, surname, midname, contactn, depid, specid, exper, photo, category, price, degree, rating, address, hpurl}
				const response = await fetch("http://localhost:5001/register/doctor", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(body)
				});
				const jsonData = await response.json();
				console.log(jsonData);
				if (!jsonData.err) {
					// setError(true);
					console.log(jsonData.err);
				} else {
					setSubmitted(true);
				}
				// console.log(jsonData)
			} catch (error) {
				console.error(error.message);
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
		
		<div >
		<section class= "body">
		<section class="body-1">
			

			
			{}
			<div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>
				<div>      
        <Row>
            <Col class="col-md-3 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">{name}</span><span class="text-black-50">{email}</span><span> </span></div>
				<div><label className="label-c">Upload a photo</label><input type="file" name='file'
					onChange={handlePhoto}/></div>
            </Col>
            <Col class="col-md-5 border-right">
                <div class="p-3 py-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h2 class="text-right">Doctor Registration</h2>
                    </div>
                    <Row class="row mt-2">
                    
                        <Col class="col-md-6"><label class="labels">Name</label><input onChange={handleName} type="text" class="form-control" value={name} placeholder={name}/>
                        
                    </Col>
                        <Col class="col-md-6"><label class="labels">Surname</label><input onChange={handleSurName} type="text" class="form-control" value={surname} placeholder={surname}/></Col>
                    </Row>
                    <Col class="row mt-3">
                        <Col class="col-md-12"><label class="labels">Middle Name</label><input onChange={handleMidName} type="text" class="form-control" value={midname} placeholder={midname}/></Col>
                        <Row class="row mt-2">
                            <Col class="col-md-6"><label class="labels">INN</label><input onChange={handleiin} type="number" class="form-control" value={iin} placeholder={iin}/></Col>
                            <Col class="col-md-6"><label class="labels">Governmental ID</label><input onChange={handleGovId} type="number" class="form-control" value={govid} placeholder={govid}/></Col>
                        </Row>
                        <Col class="col-md-12"><label class="labels">Date of birth</label><DatePicker selected={dbirth} onChange={(date:Date) => setDbirth(date)} /></Col>
                        <Col class="col-md-12"><label class="labels">Mobile Number</label><input onChange={handleContactn} type="number" class="form-control" placeholder={contactn} value={contactn}/></Col>
                        <Col class="col-md-12"><label class="labels">Address</label><input onChange={handleAddress} type="text" class="form-control" placeholder={address} value={address}/></Col>
                        <Col class="col-md-12"><label class="labels">Email</label><input onChange={handleEmail} type="text" class="form-control" placeholder={email} value={email}/></Col>
                        
                    </Col>
                
                </div>
            </Col>
            <Col class="col-md-4">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center experience"><span></span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div>
                    <Col class="col-md-12"><label class="labels">Category</label><input onChange={handleCategory} type="text" class="form-control" placeholder={category} value={category}/></Col>
                        <Row class="row mt-2">
                            <Col class="col-md-6"><label class="labels">Degree</label><select onChange={handleDegree} value={degree}><option>...</option><option>Master's Degree</option><option>PhD</option></select></Col>
                            <Col class="col-md-6"><label class="labels">Experience</label><input onChange={handleExper} type="number" class="form-control" value={exper} placeholder={exper}/></Col>
                        </Row>
                        
                        <Row class="row mt-2">
                            <Col class="col-md-6"><label class="labels">Department ID</label><input onChange={handleDepid} type="number" class="form-control" value={depid} placeholder={depid}/></Col>
                            <Col class="col-md-6"><label class="labels">Specialization ID</label><input onChange={handleSpecid} type="number" class="form-control" value={specid} placeholder={specid}/></Col>
                        </Row>
                    
                        <Col class="col-md-12"><label class="labels">Price</label><input onChange={handlePrice} type="number" class="form-control" placeholder={price} value={price}/></Col>


                    
                        
            </div>
        </Col>


        
                      
                       
    </Row>
    </div>
			<button onClick={handleSubmit} className="button" type="submit">
			Register
			</button>
		</section>
	</section>
		</div>
		
	);
}
