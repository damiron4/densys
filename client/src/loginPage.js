import { useState } from 'react';
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

export default function LoginPage() {

	const [iin, setiin] = useState('');
	const [password, setPassword] = useState('');

	
	
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	
	const [loginSuccess, setLoginSuccess] = useState(false);
	const [message, setMessage] = useState('');
	
	const handleiin = (e) => {
		setiin(e.target.value);
		setSubmitted(false);
	}
	
	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	}
	
const handleSubmit = (e) => {
	e.preventDefault();
	if (iin === '' || password === '' ) {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
			display: !loginSuccess ? '' : 'none',
		}}>
		<h1>{message}</h1>
	</div>
	);
};

const handleLogin = async e => {
	e.preventDefault();
	try {
		const body = {iin, password}
		const response = await fetch("http://localhost:5000/login-admin", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		});
		const jsonData = await response.json();
		setMessage(jsonData.message);
		setLoginSuccess(jsonData.status);
		if(loginSuccess) {
			window.location = "/DoctorMP";
		}
	} catch (error) {
		console.error(error.message);
	}
};

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
	
	<div>
	<header className="site-header">
		<div class="container">
			<p><ht class="back-ht">A-Clinic</ht></p>
      		<p>Main Page</p>
      		<p>Message</p>
      		<p>Health Care Services</p>
		</div>
	</header>

	
	<section class= "features">
		<div>
			<h1>Login</h1>
		</div>
		<label className="label">Username</label>
		<input maxLength={12}
		onChange={handleiin} className="input" 
		value={iin} type="text" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />

		{}
		<div className="messages">
			{errorMessage()}
			{successMessage()}
		</div>

		<button onClick={handleLogin} className="btn" type="submit">
		Login
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
