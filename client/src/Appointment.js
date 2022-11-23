import { useState } from 'react';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Appointment() {

	const [name, setName] = useState('');
	const [surname, setSurName] = useState('');
	const [docspec, setDocSpec] = useState('');
	const [docch, setDocch] = useState('');
	const [prefdate, setPrefdate] = useState(new Date());
	const [contactd, setContacd] = useState('');
	
	
	
	
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
	const handleDocspec = (e) => {
		setDocSpec(e.target.value);
		setSubmitted(false);
	};
	const handleDocch = (e) => {
		setDocch(e.target.value);
		setSubmitted(false);
	};
	const handlePrefdate = (e) => {
		setPrefdate(e.target.value);
		setSubmitted(false);
	}
	const handleContactd = (e) => {
		setContacd(e.target.value);
		setSubmitted(false);
	}

const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || surname === '' || docspec === ''|| docch === '' ) {
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
		display: submitted ? '' : 'none',
		}}>
		<h1>The form has been sent for verification</h1>
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
			<h1>Appointment form</h1>
		</div>
		<label className="label">Name of patient</label>
		<input onChange={handleName} className="input" 
		value={name} type="text" />

		<label className="label">Surname of patient</label>
		<input onChange={handleSurName} className="input"
		value={surname} type="text" />

		<label className="label">Preffered date</label>
		<DatePicker 
			selected={prefdate}
			onChange={(date:Date) => setPrefdate(date)} />

		<label className="label">Doctor specialization</label>
		<input onChange={handleDocspec} className="input" 
		value={docspec} type="text" />

		<label className="label">Doctor choice </label>
		<input onChange={handleDocch} className="input" 
		value={docch} type="text" />

		<label className="label">Contact details (email or phone number) </label>
		<input onChange={handleContactd} className="input" 
		value={contactd} type="text" />
		{}
		<div className="messages">
			{errorMessage()}
			{successMessage()}
		</div>

		<button onClick={handleSubmit} className="btn" type="submit">
		Make an appointment
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
