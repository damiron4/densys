import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

import Header from "./components/header";
import Footer from "./components/footer";
import AccessDenied from "./components/accessDenied";
import PatientRegistrationForm from "./components/patientRegistrationForm";

export default function RegPatient() {
	const [role, setRole] = useState('');

	Axios.defaults.withCredentials = true;
	useEffect(()=> {
		Axios.get("http://localhost:5000/login").then((response) => {
			if (response.data.loggedIn) {
				setRole(response.data.user.role);
			}
		});
	}, [])


	return (
		<div>
			<Header/>
			{ role == "admin" && <PatientRegistrationForm />}
			{ role != "admin" && <AccessDenied />}
			<Footer/>
		</div>
	);
}
