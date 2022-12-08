import React,{ useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
import moment from 'moment'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
// import data from "./mock-data.json";
import Header from "./components/header";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import BackFon from './image/BackFon.jpg';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';
import Popup from './popup';
import doc1 from './image/doc1.jpg';
import doc2 from './image/doc2.jpg';
import doc3 from './image/doc3.jpg';
import doc4 from './image/doc4.jpg';
import doc5 from './image/doc5.jpg';
import doc6 from './image/doc6.jpg';
import doc7 from './image/doc7.jpg';
import doc8 from './image/doc8.jpg';
import doc9 from './image/doc9.jpg';
import doc10 from './image/doc10.jpg';


export default function Appointment() {
	const [contacts, setContacts] = useState([]);
	const[buttonPopup,setButtonPopup]=useState(false);
	const[index,setIndex]=useState(-1);
	const [searchby, setSearchBy] = useState();
	const[timeSlots, setTimeSlots] = useState([]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [contactn, setContactn] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

	const createTimeSlots = (fromTime, toTime) =>{
	let startTime= moment(fromTime, 'hh:mm');
	let endTime = moment(toTime, 'hh:mm');
	let arr=[];

	while(startTime<=endTime) {
		arr.push(new moment(startTime).format('hh:mm'));
		startTime.add(30,'minutes');
	}
	return arr;
	};

	// const [submitted, setSubmitted] = useState(false);
	// const [error, setError] = useState(false);
	const [items, setItems] = useState({});
	const [specializations, setSpecializations] = useState({});
	

	const linkStyle = {
		textDecoration: "none",
		color: 'black'
	  };

	const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    const handleSurname = (e) => {
        setSurname(e.target.value);
        setSubmitted(false);
    };
    const handleContactn = (e) => {
        setContactn(e.target.value);
        setSubmitted(false);	
    };
	const handleSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || surname === '' || contactn === ''  ) {
            setError(true);
        } else {
            setError(false);
            try {
                //id, start_t, end_t, day, doc_id, pro_id, status
                const body = {name, surname, contactn}
                 await fetch("http://localhost:5001/appointment", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: {
                        name: name,
                        surname: surname,
                        contactn: contactn,
                        id:null,
                        start_t: null,
                        end_t: null,
                        day: null,
                        doc_id: null,
                        pro_id: null,
                        status: null,
                    }
                });
				setSubmitted(true);

                // const jsonData = await response.json();
                // console.log(jsonData)
            } catch(error){
                console.error(error.message)
            }
        }
    };

	useEffect(()=> {
		setTimeSlots(createTimeSlots('08:00', '12:00'));          //set time

		var element = document.getElementsByName('searchby');
		element[0].checked = true;
		setSearchBy("doctor");
		handleSearch();

		Axios.get("http://localhost:5001/specialization/search").then((response) => {
        	setSpecializations(response.data);
    	});
	}, []);
	

	const handleSearch = () => {
		var element = document.getElementsByName('searchby');
		  
		for(let i = 0; i < element.length; i++) {
			if(element[i].checked) {
				if (element[i].value === "doctor") {
					Axios.get("http://localhost:5001/doctor/search").then((response) => {
					setItems(response.data);
					});	
				} else if (element[i].value === "specialization") {
					Axios.get("http://localhost:5001/specialization/search").then((response) => {
					setItems(response.data);
					});
				} else if (element[i].value === "procedure") {
					Axios.get("http://localhost:5001/procedure/search").then((response) => {
					setItems(response.data);
					});
				}
			}	
		}
		
		
	} 

const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results);
  }

  const images = [doc1,doc2,doc3,doc4,doc5,doc6,doc7,doc8,doc9,doc10]




//   const handleOnHover = (result) => {
//     // the item hovered
//     // console.log(result)
//   }

//   const handleOnSelect = (item) => {
//     // the item selected
// 	// setIndex(item.id);
// 	if (searchby === "doctor") {
// 		Axios.get(`http://localhost:5001/doctor/${item.id}`).then((response) => {
//         	setContacts(response.data);
//     	});
// 	} else if (searchby === "specialization") {
// 		Axios.get(`http://localhost:5001/doctor/specialization/${item.id}`).then((response) => {
//         	setContacts(response.data);
//     	});
// 	} else if (searchby === "procedure") {
// 		Axios.get(`http://localhost:5001/doctor/procedure/${item.id}`).then((response) => {
//         	setContacts(response.data);
//     	});
// 	}
//   }

//   const handleOnFocus = () => {
//     // console.log('Focused')
//   }

//   const formatResult = (item) => {
//     return (
//       <>
// 		{item.name}
//       </>
//     )
//   }
//   const handlePopUp = (e)=> {
// 	e.preventDefault();
// 	navigate( ,{state:{id:1,name:'sabaoon'}});
// 	setButtonPopup(true)
	

  }

const errorMessage = () => {
	// return (
	// <div
	// 	className="error"
	// 	style={{
	// 	display: error ? '' : 'none',
	// 	}}>
	// 	<h1>Please enter the required data</h1>
	// </div>
	// );
};

// sessionStorage.setItem("contact", JSON.stringify(contacts));

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
				<Row xs={0} md={4} className="g-4">
					{contacts.map(
						(contact)=>  
							<Col>
								<Card style={{ width: '100%', height: '100%'}}>
								<Card.Img variant="top" src={BackFon}  width = {0} height = {300} />
									<Card.Body>
										<Card.Title>{contact.name}</Card.Title>
										<Card.Text> Specialization: {specializations[contact.specid].name}</Card.Text>
										<Card.Text>Experience in years: {contact.exp}</Card.Text>

										<Dropdown>
											<Dropdown.Toggle variant="success" id="dropdown-basic">
												Avaliable Timeslots
											</Dropdown.Toggle>
											<Dropdown.Menu>
												{timeSlots.map((item,index) => (
													<Dropdown.Item onClick={()=> setButtonPopup(true)} href={"#/action-1/"+contact.id}>{timeSlots [index+1]  ? timeSlots[index] +  ' - ' + timeSlots[index + 1] + '    ': ''}</Dropdown.Item>
												))}
											</Dropdown.Menu>
										</Dropdown>


										{buttonPopup? (
											<div className='popup'>
												<div className='popup-inner'>
												{/* <Modal.Body style={{marginLeft: 40, marginRight: 40 }}>
															<Form onSubmit={(e)=>handleSubmit(e)} style={{marginBottom: 40}}>
																<div><Form.Label  >Appointment</Form.Label></div>
																
																<Form.Group className="mb-3">
																	<Form.Label>Name</Form.Label>
																	<Form.Control
																		type="text"
																		onChange={handleName}
																		value={name}
																		placeholder="Enter your name"
																		autoFocus/>
																</Form.Group>
																<Form.Group className="mb-4">
																	<Form.Label>Surname</Form.Label>
																	<Form.Control 
																	type="text"
																	onChange={handleSurname}
																	value={surname}
																	placeholder="Enter your surname"/>
																</Form.Group>
																<Form.Group className="mb-4">
																	<Form.Label>Contact Number</Form.Label>
																	<Form.Control 
																	type="number"
																	onChange={handleContactn}
																	value={contactn}
																	placeholder="Enter your contact number"/>
																</Form.Group>
																<Form.Group className="d-grid mb-3">
																	<Button variant="info" size="lg" type="submit">Register</Button>{' '}
																</Form.Group>
																
															</Form>
														</Modal.Body> */}
													<button onClick={()=>setButtonPopup(false)} class="btn-close button-close" aria-label="Close"></button>
												</div>
											</div> 
										) :null } 
										
									</Card.Body>
								</Card>
							</Col>

						)
					}
				</Row>

			</div>
			<div className="messages">{errorMessage()}</div>
		</section>
		<Footer/>
	</div>

);
