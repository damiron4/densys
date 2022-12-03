import { useState } from 'react';
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect } from 'react';

export default function Appointment() {

	const [name, setName] = useState('');
	const [surname, setSurName] = useState('');
	const [docspec, setDocSpec] = useState('');
	const [docch, setDocch] = useState('');
	const [prefdate, setPrefdate] = useState(new Date());
	const [contactd, setContacd] = useState('');
	const [procedure, setProcedure] = useState('');
	const [inputText, setInputText] = useState('');
	const [searchby, setSearchBy] = useState();

	
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	const [items, setItems] = useState({});
	
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

	useEffect(()=> {
		handleSearch();
	}, []);
	

	const handleSearch = () => {
		var element = document.getElementsByName('searchby');
		  
		for(let i = 0; i < element.length; i++) {
			if(element[i].checked) {
				if (element[i].value == "doctor") {
					Axios.get("http://localhost:5000/doctor/search").then((response) => {
					setItems(response.data);
					});	
				} else if (element[i].value == "specialization") {
					// Axios.get("http://localhost:5000/doctor/search").then((response) => {
					// setItems(response.data);
					// });
					setItems([
						{id:0, name: "1"},
						{id:1, name: "2"}
					]);
				} else if (element[i].value == "procedure") {
					// Axios.get("http://localhost:5000/doctor/search").then((response) => {
					// setItems(response.data);
					// });
					setItems([
						{id:0, name: "p1"},
						{id:1, name: "p2"}
					]);
				}
			}	
		}
		
		
	} 

const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    // console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
        {/* <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span> */}
		{item.name}
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
	
	<div className="background">
		<Header/>
		<section class= "body">
			
			<div>
				<h1>Appointment form</h1>
			</div>
			
			<label className="label-c">Search by</label>
			<div className='messages'>
			<div class="l">
			<input className='input-t' type="radio" name="searchby" value="doctor"  onChange={e=>{setSearchBy(e.target.value); handleSearch()}}/> Doctor
			</div>
			<div class="l">
			<input className='input-t' type="radio" name="searchby" value="specialization" onChange={e=>{setSearchBy(e.target.value); handleSearch()}} /> Specialization 
			</div>
			<div class="l">
			<input className='input-t' type="radio" name="searchby" value="procedure" onChange={e=>{setSearchBy(e.target.value); handleSearch()}}/> Procedure
			</div>
			</div>
			<div style={{ width: 400 , margin: "auto",marginBottom:10}}>
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

			<div className="appointment">
				<table>
					<thead>
						<tr>
							<th>Doctor's name</th>
							<th>Specialization</th>
							<th>Procedure</th>
						</tr>
					</thead>
					<tbody>
						{}
					</tbody>
				</table>
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
