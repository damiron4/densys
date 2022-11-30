import { useState } from 'react';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

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

	const items = [
		{
		  id: 0,
		  name: 'Cobol'
		},
		{
		  id: 1,
		  name: 'JavaScript'
		},
		{
		  id: 2,
		  name: 'Basic'
		},
		{
		  id: 3,
		  name: 'PHP'
		},
		{
		  id: 4,
		  name: 'Java'
		}
	  ]

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

// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (inputText === '' ) {
// 	setError(true);
// 	} else {
// 	setSubmitted(true);
// 	setError(false);
// 	}
// };

const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
      </>
    )
  }

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
			
			<label className="label">Search by</label>
			<input type="radio" name="searchby" value="Doctor" onChange={e=>setSearchBy(e.target.value)}/> Doctor's name
			<input type="radio" name="searchby" value="Spec" onChange={e=>setSearchBy(e.target.value)} /> Specialization 
			<input type="radio" name="searchby" value="Procedure" onChange={e=>setSearchBy(e.target.value)}/> Procedure
			



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
			{/* <input placeholder = "Search ..."  onChange = {handleInputText} type="text" /> */}
			<div style={{ width: 400 , margin: "auto"}}>
				<ReactSearchAutocomplete
					items={items}
					onSearch={handleOnSearch}
					onHover={handleOnHover}
					onSelect={handleOnSelect}
					onFocus={handleOnFocus}
					autoFocus
					formatResult={formatResult}
				/>
			</div>
			<div className="messages">
				{errorMessage()}
			
			</div>

			{/* <button onClick={handleSubmit} className="btn" type="submit">
			Find
			</button> */}
		</section>
		<Footer/>
	</div>
);
}
