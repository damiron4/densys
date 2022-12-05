import React from "react";
// import { useEffect, useState } from "react";
// import Axios from "axios";

import Button from 'react-bootstrap/Button'; 

export default function AdminMP() {


	return (
		<div style={{marginTop: 100, marginInline: 300}}>
            <div style={{marginBottom: 50}}>
                <h3>Patients</h3>
                <Button variant="info" href="/patients">Patient List</Button>
                <span style={{margin: 5}}></span>
                <Button variant="info" href="/register/patient">Register Patient</Button>
            </div>
            <div>
                <h3>Doctors</h3>
                <Button variant="info" href="/doctors">Doctor List</Button>
                <span style={{margin: 5}}></span>
                <Button variant="info" href="/register/doctor">Register Doctor</Button>
            </div> 
		</div>
	);

}
