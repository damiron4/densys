import React from "react";
import Table from 'react-bootstrap/Table';

import { useEffect, useState } from "react";
import Axios from "axios";

import Button from 'react-bootstrap/Button'; 
import ButtonGroup from 'react-bootstrap/ButtonGroup'; 

// function approveAppointment(id) {
//     Axios.get(`http://localhost:5001/appointment/approve/${id}`).then((response) => {
//         setAppointments(response.data);
//         console.log(appointments);
//     });
// }

export default function AdminMP() {
    const [appointments, setAppointments] = useState([])
    // const [doctors, setDoctors] = useState({})
    // const [procedures, setProcedures] = useState({})
    
    async function refreshData() {
        Axios.get("http://localhost:5001/appointments").then((response) => {
            setAppointments(response.data);
        });
    }

    useEffect(()=> {
		refreshData();
	}, [])

    async function approveAppointment(id) {
        Axios.post(`http://localhost:5001/appointment/approve/${id}`).then((response) => {
            if (response.data.result) {
                refreshData();
        }});
    }

    async function cancelAppointment(id) {
        Axios.post(`http://localhost:5001/appointment/cancel/${id}`).then((response) => {
            if (response.data.result) {
                refreshData();
        }});
    }

	return (
		<div style={{marginTop: 100, marginInline: 300}}>
            <div style={{marginBottom: 50}}>
                <h3>Patients</h3>
                <Button variant="info" href="/patients">Patient List</Button>
                <span style={{margin: 5}}></span>
                <Button variant="info" href="/register/patient">Register Patient</Button>
            </div>
            <div style={{marginBottom: 50}}>
                <h3>Doctors</h3>
                <Button variant="info" href="/doctors">Doctor List</Button>
                <span style={{margin: 5}}></span>
                <Button variant="info" href="/register/doctor">Register Doctor</Button>
            </div>
            <div>
                <h3>Appointments</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>Day</th>
                            <th>Time</th>
                            <th>Patient</th>
                            <th>Contact Number</th>
                            <th>Doctor</th>
                            <th>Procedure</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {appointments.map((appointment) =>
                    (<tr>
                        <td>{appointment.day.slice(5, 10)}</td>
                        <td>{appointment.start_t.slice(0, 5) + "-" + appointment.end_t.slice(0, 5)}</td>
                        <td>{appointment.name + " " + appointment.surname}</td>
                        <td>{"+7" + appointment.contactn}</td>
                        <td>{appointment.dname + " " + appointment.dsname}</td>
                        <td>{appointment.pname}</td>
                        <td>{appointment.status}</td>
                        <td><ButtonGroup aria-label="Basic example">
                                <Button variant={appointment.status === "Pending" ? "outline-info" : "secondary"} disabled={appointment.status !== "Pending"} onClick={(e)=>approveAppointment(appointment.id)}>Approve</Button>
                                <Button variant={appointment.status === "Pending" ? "outline-danger" : "secondary"} disabled={appointment.status !== "Pending"} onClick={(e)=>cancelAppointment(appointment.id)}>Cancel</Button>
                            </ButtonGroup></td>
                    </tr>))}   
                    </tbody>
                </Table>
            </div> 
		</div>
	);

}
