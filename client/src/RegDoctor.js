import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

export default function RegDoctor() {
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
			{ role === "admin" && <DoctorRegistrationForm />}
			{ role !== "admin" && <AccessDenied />}
			<Footer/>
		</div>
	);

}
