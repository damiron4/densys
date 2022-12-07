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

			
			<button onClick={handleSubmit} className="button" type="submit">
			Register
			</button>
		</section>
	</section>
		</div>
		
	);
}
