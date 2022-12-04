import React, { useState, useEffect } from 'react';
import { Link,useParams } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import data from "./mock-data.json";
import Axios from 'axios';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

import BackFon from './image/BackFon.jpg';

export default function Form() {
const {ht} = useParams();
const [contacts, setContacts] = useState(data);
const[timeSlots, setTimeSlots] = useState([]);
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

useEffect(() =>{
    setTimeSlots(createTimeSlots('08:00', '12:00'));          //set time

    Axios.get("http://localhost:5000/doctor").then((response) => {
        setContacts(response.data);
    });

}, []);
  
return (
<div className="background">
  <div className='body' class="box-body">
    <p>{ht}</p>
    <Row xs={0} md={5} className="g-4">
    {contacts.map((contact,index)=>  
        
        <Col>
        <Card style={{ width: '18rem', height:'30rem' }}>
            <Card.Img variant="top" src={BackFon}  width = {200} height = {300} />
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
                    <Dropdown.Item href="#/action-1">{timeSlots [index+1]  ? timeSlots[index] +  ' - ' + timeSlots[index + 1] + '    ': ''}</Dropdown.Item>
                ))}
                </Dropdown.Menu>
                </Dropdown>
            </Card.Body>
            </Card>
        </Col>
    )}
    </Row>
    
  <footer class="site-footer">
      <div class="con">
        <p>© A-Clinic</p>
        <p>Welcome to A-Clinic, Health Care website</p>
      </div>
    </footer>
  </div>
  </div>
);
}