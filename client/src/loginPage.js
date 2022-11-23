import { useState } from 'react';
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

export default function LoginPage() {

	const [name, setName] = useState('');
	const [surname, setSurName] = useState('');
	const [midname, setMidName] = useState('');
	const [iin, setiin] = useState('');
	const [id, setid] = useState('');
	const [email, setEmail] = useState('');
	const [adress, setAdress] = useState('');
	const [contactn, setContactn] = useState('');
	const [dbirth, setDbirth] = useState(new Date());
	const current = new Date();
	const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
	const [password, setPassword] = useState('');
	const[depid, SetDepid] =  useState('');
	const[specid, SetSpecid] =  useState('');
	const[exper, SetExper] =  useState('');
	const[price, SetPrice] =  useState('');
	const[category, SetCategory] =  useState('');
	const[degree, SetDegree] =  useState('');
	const[rating, SetRating] =  useState('');
	const[photo, SetPhoto] =  useState('');
	
	
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	
	const [loginSuccess, setLoginSuccess] = useState(false);
	const [message, setMessage] = useState('');

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
	
	const handleid = (e) => {
		setid(e.target.value);
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
	const handleAdress = (e) => {
		setAdress(e.target.value);
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
