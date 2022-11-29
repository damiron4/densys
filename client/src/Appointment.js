import { useState } from 'react';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Header from "./components/header";
import Footer from "./components/footer";

export default function Appointment() {

	const [name, setName] = useState('');
	const [surname, setSurName] = useState('');
	const [docspec, setDocSpec] = useState('');
	const [docch, setDocch] = useState('');
	const [prefdate, setPrefdate] = useState(new Date());
	const [contactd, setContacd] = useState('');
	const [procedure, setProcedure] = useState('');
	const [inputText, setInputText] = useState("");
	const [searchby, setSearchBy] = useState();

	
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
	const handleProcedure = (e) => {
		setProcedure(e.target.value);
		setSubmitted(false);
	}
	const handleInputText= (e) => {
		setInputText(e.target.value);
		setSubmitted(false);
	}

const handleSubmit = (e) => {
	e.preventDefault();
	if (inputText === '' ) {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};



const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter the required data</h1>
	</div>
	);
};
return (
	
	<div>
		<Header/>
		<section class= "features">
			
			<div>
				<h1>Appointment form</h1>
			</div>
			<input type="radio" name="searchby" value="Doctor" onChange={e=>setSearchBy(e.target.value)}/> Doctor's name
			<input type="radio" name="searchby" value="Spec" onChange={e=>setSearchBy(e.target.value)} /> Specialization 
			<input type="radio" name="searchby" value="Procedure" onChange={e=>setSearchBy(e.target.value)}/> Procedure
			
			<label className="label">Search by</label>
			<input placeholder = "Search ..."  onChange = {handleInputText}
			type="text" />


			<div className="appointment">
				<table>
					<thead>
						<tr>
							<th>Doctor's name</th>
							<th>Specialization</th>
							<th>Procedure</th>
						</tr>
					</thead>
				</table>
			</div>	
			{}
			<div className="messages">
				{errorMessage()}
			
			</div>

			<button onClick={handleSubmit} className="btn" type="submit">
			Find
			</button>
		</section>
		<Footer/>
	</div>
);
}
