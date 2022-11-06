import { useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

export default function Form() {

const [name, setName] = useState('');
const [surname, setSurName] = useState('');
const [midname, setMidName] = useState('');
const [iin, setiin] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [bloodg, setBloodg] = useState('');
const [dbirth, setDbirth] = useState(new Date());


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


const handlebloodg = (e) => {
	setBloodg(e.target.value.toUpperCase());
	setSubmitted(false);
}

const handleDbirth = (e) => {
	setDbirth(e.target.value);
	setSubmitted(false);
}

const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === ''|| surname === '' || midname === '' || iin === '' || bloodg === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
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

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	
	<div className="form">
	<header className="site-header">
		<div class="container">
			<p><ht class="back-ht">A-Clinic</ht></p>
      		<p>Main Page</p>
      		<p>Message</p>
      		<p>Health Care Services</p>
		</div>
	</header>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>
	<section class= "features">

		<div>
			<h1>Registration</h1>
		</div>
		{/* Labels and inputs for form data */}
		<label className="label">Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

		<label className="label">Surname</label>
		<input onChange={handleSurName} className="input"
		value={surname} type="text" />

		<label className="label">Middlename</label>
		<input onChange={handleMidName} className="input"
		value={midname} type="text" />

		<label className="label">Date of birth</label>
		<DatePicker
			selected={dbirth}
			onChange={(date:Date) => setDbirth(date)} />
			

		<label className="label">IIN number</label>
		<input maxLength={12}
		onChange={handleiin} className="input" 
		value={iin} type="number" />

		<label className="label">Blood group</label>	
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
		</select> 

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />

		<button onClick={handleSubmit} className="btn" type="submit">
		Register
		</button>
	</section>
	<footer class="site-footer">
      <div class="con">
        <p>© Кекс, 2020</p>
        <p>Магазин товаров для дома</p>
      </div>
    </footer>
	</div>
);
}
