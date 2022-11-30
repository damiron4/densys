import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dropdown from 'react-bootstrap/Dropdown';

import CrazyFrog from './crazy_frog_doctor.jfif';
import DoctorStrange from './Doctor_Strange.jfif';
import NurseJoy from './nurse_Joy.jfif';
import Tenma from './Tenma.jfif';

export default function Form() {


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
React.useEffect(() =>{
  setTimeSlots(createTimeSlots('08:00', '12:00'));          //set time
}, []);
  
return (

  <div>
    <Row xs={0} md={4} className="g-4">
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CrazyFrog}  width = {200} height = {300} />
            <Card.Body>
                <Card.Title>Crazy Frog</Card.Title>
                <Card.Text>
                Specialization: blablalba
                </Card.Text>
                <Card.Text>
                Experience in years: 2
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

        <Col>
        <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={DoctorStrange}  width = {200} height = {300}/>
            <Card.Body>
                <Card.Title>Doctor name</Card.Title>
                <Card.Text >
                Specialization: none
                </Card.Text>
                <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Avaliable Timeslots
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">08:00 - 08:30</Dropdown.Item>
                <Dropdown.Item href="#/action-2">08:30 - 09:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3">09:00 - 09:30</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Card.Body>
            </Card>
            </Col>
            
            <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={NurseJoy}  width = {200} height = {300}/>
            <Card.Body>
                <Card.Title>Doctor name</Card.Title>
                <Card.Text>
                Specialization: Pokemons
                </Card.Text>
                <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Avaliable Timeslots
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">08:00 - 08:30</Dropdown.Item>
                <Dropdown.Item href="#/action-2">08:30 - 09:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3">09:00 - 09:30</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Card.Body>
            </Card>
            </Col>

        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Tenma}  width = {200} height = {300}/>
            <Card.Body>
                <Card.Title>Doctor name</Card.Title>
                <Card.Text>
                Specialization: Virology aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Card.Text>
                <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Avaliable Timeslots
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">08:00 - 08:30</Dropdown.Item>
                <Dropdown.Item href="#/action-2">08:30 - 09:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3">09:00 - 09:30</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Card.Body>
            </Card>
            </Col>
        ... <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Tenma} width = {200} height = {300} />
            <Card.Body>
                <Card.Title>Doctor name</Card.Title>
                <Card.Text>
                Specialization: blablalba
                </Card.Text>
                <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Avaliable Timeslots
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">08:00 - 08:30</Dropdown.Item>
                <Dropdown.Item href="#/action-2">08:30 - 09:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3">09:00 - 09:30</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Card.Body>
            </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CrazyFrog} />
            <Card.Body>
                <Card.Title>Doctor name</Card.Title>
                <Card.Text>
                Specialization: blablalba
                </Card.Text>
                <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Avaliable Timeslots
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">08:00 - 08:30</Dropdown.Item>
                <Dropdown.Item href="#/action-2">08:30 - 09:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3">09:00 - 09:30</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Card.Body>
            </Card>
        </Col>

        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CrazyFrog} />
            <Card.Body>
                <Card.Title>Doctor name</Card.Title>
                <Card.Text>
                Specialization: blablalba
                </Card.Text>
                <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Avaliable Timeslots
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">08:00 - 08:30</Dropdown.Item>
                <Dropdown.Item href="#/action-2">08:30 - 09:00</Dropdown.Item>
                <Dropdown.Item href="#/action-3">09:00 - 09:30</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CrazyFrog} />
            <Card.Body>
                <Card.Title>Doctor name</Card.Title>
                <Card.Text>
                Specialization: blablalba
                </Card.Text>
                <Card.Link href="#">Make appointment</Card.Link>
            </Card.Body>
            </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={CrazyFrog} />
            <Card.Body>
                <Card.Title>Doctor name</Card.Title>
                <Card.Text>
                Specialization: blablalba
                </Card.Text>
                <Card.Link href="#">Make appointment</Card.Link>
            </Card.Body>
            </Card>
        </Col>
    </Row>
    
  <footer class="site-footer">
      <div class="con">
        <p>© A-Clinic</p>
        <p>Welcome to A-Clinic, Health Care website</p>
      </div>
    </footer>
  </div>
);
}