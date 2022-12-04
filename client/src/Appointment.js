import React,{ useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
import moment from 'moment'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import data from "./mock-data.json";
import Header from "./components/header";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import BackFon from './image/BackFon.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import Popup from './popup';



export default function Appointment() {
	const [contacts, setContacts] = useState(data);
	const[buttonPopup,setButtonPopup]=useState(false);

	const [searchby, setSearchBy] = useState();

	let navigate = useNavigate();

	const[timeSlots, setTimeSlots] = React.useState([]);
	const createTimeSlots = (fromTime, toTime) =>{
	let startTime= moment(fromTime, 'hh:mm A');
	let endTime = moment(toTime, 'hh:mm A');
	let arr=[];

	while(startTime<=endTime) {
		arr.push(new moment(startTime).format('hh:mm A'));
		startTime.add(30,'minutes');
	}
	return arr;
	};

	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	const [items, setItems] = useState({});
	
	const linkStyle = {
		textDecoration: "none",
		color: 'black'
	  };

	useEffect(()=> {
		setTimeSlots(createTimeSlots('08:00', '12:00'));          //set time

		var element = document.getElementsByName('searchby');
		element[0].checked = true;
		setSearchBy("doctor");
		handleSearch();

		Axios.get("http://localhost:5000/doctor").then((response) => {
        	setContacts(response.data);
    	});

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
					// Axios.get("http://localhost:5000/specialization/search").then((response) => {
					// setItems(response.data);
					// });
					setItems([
						{id:0, name: "1"},
						{id:1, name: "2"}
					]);
				} else if (element[i].value == "procedure") {
					// Axios.get("http://localhost:5000/procedure/search").then((response) => {
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
    // console.log(string, results);
  }

  const handleOnHover = (result) => {
    // the item hovered
    // console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
	if (searchby == "doctor") {
		const url = `/box-list/${item.id}`;
		navigate(url);
	}
	
  }

  const handleOnFocus = () => {
    // console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
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
		<section className= "body">
			
			<div style={{marginTop: 40}}>
				<h1>Appointment form</h1>
			</div>
			
			<label className="label-c">Search by</label>
			<div className='messages'>
				<div className="l">
				<input className='input-t' type="radio" name="searchby" value="doctor"  onChange={e=>{setSearchBy(e.target.value); handleSearch()}}/> Doctor
				</div>
				<div className="l">
				<input className='input-t' type="radio" name="searchby" value="specialization" onChange={e=>{setSearchBy(e.target.value); handleSearch()}} /> Specialization 
				</div>
				<div className="l">
				<input className='input-t' type="radio" name="searchby" value="procedure" onChange={e=>{setSearchBy(e.target.value); handleSearch()}}/> Procedure
				</div>
			</div>
			<div style={{ width: 400 , margin: "auto", marginBottom: 10}}>
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

			<div className='body' class="box-body">
				<Row xs={0} md={5} className="g-4">
				{contacts.map((contact)=>  
					// {contact.specid===ht ? (
					<Col>
					<Card style={{ width: '18rem'}}>
						<Card.Img variant="top" src={BackFon}  width = {0} height = {300} />
						<Card.Body>
							<Card.Title>{contact.name}</Card.Title>
							<Card.Text>
							Specialization: {contact.specid}
							</Card.Text>
							<Card.Text>
							Experience in years: {contact.exp}
							</Card.Text>

							<Dropdown>
							<Dropdown.Toggle variant="success" id="dropdown-basic">
								Avaliable Timeslots
							</Dropdown.Toggle>
							<Dropdown.Menu>
							{timeSlots.map((item,index) => (
								<Dropdown.Item onClick={()=>setButtonPopup(true)} href="#/action-1">{timeSlots [index+1]  ? timeSlots[index] +  ' - ' + timeSlots[index + 1] + '    ': ''}</Dropdown.Item>
							))}
							</Dropdown.Menu>
							</Dropdown>
						</Card.Body>
						</Card>
					</Col>
					)}
				</Row>
				<Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
					<h3>My popup</h3>
				</Popup>
			</div>

			{/* <div className="appointment">
				<table>
					<thead>
						<tr>
							<th>Doctor</th>
							<th>Specialization</th>
							<th>Procedure</th>
							<th>Link</th>
						</tr>
					</thead>
					<tbody>
					{contacts.map((contact)=>  
					<tr>
						<td>{contact.name}</td>
						<td>{contact.specid}</td>
						<td>{contact.procedure}</td>
						<td><button type="button"><Link style={linkStyle} className="text-line" to={"/appointment-form/"+contact.specid}>Link</Link></button></td>
					</tr>
					
					)}
					</tbody>
				</table>
			</div> */}

			<div className="messages">
				{errorMessage()}
			
			</div>
		</section>
		<Footer/>
	</div>
);
}
