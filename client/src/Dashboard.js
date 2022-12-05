import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";

import Header from "./components/header";
import Footer from "./components/footer";
import AccessDenied from "./components/accessDenied";
import AdminMP from "./components/AdminMP";

export default function Dashboard() {
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
		<div className="background">
			<Header/>
			{ role === "admin" && <AdminMP />}
			{/* { role === "doctor" && <AccessDenied />} */}
            {/* { role === "patient" && <AccessDenied />} */}
            { role === "" && <AccessDenied />}
			<Footer/>
		</div>
	);

}
