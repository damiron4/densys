import { useEffect, useState } from 'react';
import Axios from "axios";
import Header from "./components/header";
import Footer from "./components/footer";
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	// TODO: ROLE SELECTION BUTTONS (FRONT)
	const [role, setRole] = useState('admin');
	const [error, setError] = useState(false);
	const [loginStatus, setLoginStatus] = useState('');
	const navigate = useNavigate();
	// const shouldRedirect = true;

	// Copy this to other pages if you need roles
	Axios.defaults.withCredentials = true;
	useEffect(()=> {
		Axios.get("http://localhost:5000/login").then((response) => {
			if (response.data.loggedIn) {
				setLoginStatus("User " + response.data.user.username + " logged in as " + response.data.user.role);
				setRole(response.data.user.role);
			}
		});
	}, [])

	// if(shouldRedirect){
    //     navigate("/register/doctor");  
    // }

	const handleUsername = (e) => {
		setUsername(e.target.value);
	}
	
	const handlePassword = (e) => {
		setPassword(e.target.value);
	}

	const statusMessage = () => {
		return (
		<div
			className="success"
			style={{
				display: loginStatus ? '' : 'none',
			}}>
			<h1>{loginStatus}</h1>
		</div>
		);
	};

	const handleLogin = async e => {
		e.preventDefault();
		if (username === '' || password === '' ) {
			setError(true);
			setLoginStatus('');
			return
		}
		try {
			const body = {username, password, role}
			const response = await fetch("http://localhost:5000/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify(body)
			});
			const jsonData = await response.json();
			if (jsonData.message) {
				setLoginStatus(jsonData.message);
				navigate("/register/doctor");	  
			}
		} catch (error) {
			console.error(error.message);
		}
	};

	const errorMessage = () => {
		return (
		<div
			className="error"
			style={{
			display: error ? '' : 'none',
			}}>
			<h1>Please enter all the fields</h1>
		</div>
		);
	};
	return (

		<div>
			<Header/>
			<section className= "features">
				<div>
					<h1>Login</h1>
				</div>
				<label className="label">Username</label>
				<input maxLength={12}
				onChange={handleUsername} className="input" 
				value={username} type="text" />

				<label className="label">Password</label>
				<input onChange={handlePassword} className="input"
				value={password} type="password" />

				{}
				<div className="messages">
					{errorMessage()}
					{statusMessage()}
				</div>

				<button onClick={handleLogin} className="btn" type="submit">Login</button>
			</section>
			<Footer/>
		</div>
	);
}
