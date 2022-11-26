import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

export default function RegPatient() {

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
const dreg = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
const [password, setPassword] = useState('');
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
//const id; 
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
	if (name === '' || password === ''|| surname === '' || midname === '' || dbirth === '' || iin === '' || contactn === '' || emerg === '' || govid === '' || bloodg === '...' || mstatus === '...' || address === '' ) {
	setError(true);
	} else {
		setSubmitted(true);
		setError(false);
		try {
			
			const body = {dbirth, iin, govid, name, surname, midname, bloodg, emerg, contactn, email, address, mstatus, dreg, id}
			const response = await fetch("http://localhost:5000/register/patient", {
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
	<header className="site-header">
		<div class="container">
		<p><ht class="back-ht"><Link className="text-link" to="/login-admin">A-Clinic</Link></ht></p>
      		<p><Link className="text-link" to="/AdministratorMP">Main Page</Link></p>
      		<p><Link className="text-link" to="/register-doctor">Register Doctor</Link></p>
      		<p>Register Patient</p>
		</div>
	</header>

	
	<section class= "features">
		<div>
			<h1>Patient Registration</h1>
		</div>
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

		<label className="label">Governmental ID number</label>
		<input onChange={handleGovId} className="input" 
		value={id} type="number" />

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

		<label className="label">Contact number</label>
		<input onChange={handleContactn} className="input"
		value={contactn} type="number" />

		<label className="label">Emergency contact number</label>
		<input onChange={handleEmerg} className="input"
		value={emerg} type="number" />

		<label className="label">Maritial status</label>	
		<select
			onChange={handleMstatus} 
			value={mstatus}
		>	
			<option>...</option>
			<option>Single</option>
			<option>Married</option>
		</select>

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Address</label>
		<input onChange={handleAddress} className="input"
		value={address} type="text" />

		<label className="label">Registration date: {dreg} </label>

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />

		{}
		<div className="messages">
			{errorMessage()}
			{successMessage()}
		</div>

		<button onClick={handleSubmit} className="btn" type="submit">
		Register
		</button>
	</section>
	<footer class="site-footer">
      <div class="con">
        <p>© A-Clinic</p>
        <p>Welcome to A-Clinic, Health Care website</p>
      </div>
    </footer>
	</div>
);
}
