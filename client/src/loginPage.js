import { useState } from 'react';

import "react-datepicker/dist/react-datepicker.css";

export default function Form() {

const current = new Date();
const [password, setPassword] = useState('');

const handleiin = (e) => {
	setiin(e.target.value);
	setSubmitted(false);
}

const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
}
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
		<label className="label">IIN number</label>
		<input maxLength={12}
		onChange={handleiin} className="input" 
		value={iin} type="number" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />

		{}
		<div className="messages">
			{errorMessage()}
			{successMessage()}
		</div>

		<button onClick={handleSubmit} className="btn" type="submit">
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
