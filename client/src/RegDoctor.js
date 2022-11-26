import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

export default function RegDoctor() {

const [name, setName] = useState('');
const [surname, setSurName] = useState('');
const [midname, setMidName] = useState('');
const [iin, setiin] = useState('');
const [govid, setGovId] = useState('');
const [email, setEmail] = useState('');
const [address, setAddress] = useState('');
const [contactn, setContactn] = useState('');
const [dbirth, setDbirth] = useState(new Date());
const current = new Date();
const [password, setPassword] = useState('');
const[depid, SetDepid] =  useState('');
const[specid, SetSpecid] =  useState('');
const[exper, SetExper] =  useState('');
const[price, SetPrice] =  useState('');
const[category, SetCategory] =  useState('');
const[degree, SetDegree] =  useState('');
const[rating, SetRating] =  useState('');
const[photo, SetPhoto] =  useState('');
const[scheduledetails, setScheduledetails] =  useState('');
const[hpurl, setHomepageURL] =  useState(''); 

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
	if (name === '' || password === ''|| surname === '' || midname === '' || iin === '' || govid === '' || address === '' || degree === '...' || photo === '') {
	setError(true);
	} else {
		setSubmitted(true);
		setError(false);
		try {
			const body = {dbirth, iin, govid, name, surname, midname, contactn, depid, specid, exper, photo, category, price, scheduledetails, degree, rating, address, hpurl}
			const response = await fetch("http://localhost:5000/register/doctor", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body)
			});
			const jsonData = await response.json();
			
			console.log(jsonData)
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

const handleDoctorRegister = async e => {
	e.preventDefault();
	try {
		const body = {dbirth, iin, govid, name, surname, midname, contactn, depid, specid, exper, photo, category, price, scheduledetails, degree, rating, address, hpurl}
		const response = await fetch("http://localhost:5000/register-doctor", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(body)
		});
		const jsonData = await response.json();
		console.log(jsonData)
		// setMessage(jsonData.message);
		// setLoginSuccess(jsonData.status);
		// if(loginSuccess) {
		// 	window.location = "/DoctorMP";
		// }
	} catch (error) {
		console.error(error.message);
	}
};

return (
	
	<div>
	<header className="site-header">
		<div class="container">
		<p><ht class="back-ht"><Link className="text-link" to="/login-admin">A-Clinic</Link></ht></p>
      		<p><Link className="text-link" to="/AdministratorMP">Main Page</Link></p>
      		<p>Register Doctor</p>
      		<p><Link className="text-link" to="/register-patient">Register Patient</Link></p>
		</div>
	</header>

	
	<section class= "features">
		<div>
			<h1>Doctor Registration</h1>
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
		<input maxLength={12} minLength={12}
		onChange={handleiin} className="input" 
		value={iin} type="number" />

		<label className="label">Governmental ID number</label>
		<input onChange={handleGovId} className="input" 
		value={govid} type="number" />

		<label className="label">Contact number</label>
		<input onChange={handleContactn} className="input"
		value={contactn} type="number" />

		<label className="label">Department ID</label>
		<input onChange={handleDepid} className="input"
		value={depid} type="number" />

		<label className="label">Specialization details ID</label>
		<input onChange={handleSpecid} className="input"
		value={specid} type="number" />

		<label className="label">Experience in years</label>
		<input onChange={handleExper} className="input"
		value={exper} type="number" />

		<label className="label">Upload a photo</label>
		<input type="file" name='file'
		onChange={handlePhoto}/>
		


		<label className="label">Category</label>
		<input onChange={handleCategory} className="input"
		value={category} type="text" />

		<label className="label">Price of the appointment (Tenge)</label>
		<input onChange={handlePrice} className="input"
		value={price} type="number" />

		<label className="label">Degree/education</label>	
		<select
			onChange={handleDegree} 
			value={degree}
		>	
			<option>...</option>
			<option>Master's Degree</option>
			<option>PhD</option>
		</select>

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Address</label>
		<input onChange={handleAddress} className="input"
		value={address} type="text" />

		<label className="label">Rating (a number in range from 0 to 10)</label>
		<input onChange={handleRating} className="input"
		min={1} max={10}
		value={rating} type="number" />

		<label className="label">Registration date: {date} </label>
		

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
