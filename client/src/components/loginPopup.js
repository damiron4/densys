import { useEffect, useState } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

// Bootstrap
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';


export default function LoginPopup(props) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	// TODO: ROLE SELECTION BUTTONS (FRONT)
	const [role, setRole] = useState('admin');
	const [error, setError] = useState(false);
	const [loginStatus, setLoginStatus] = useState('');
	const navigate = useNavigate();
	// const shouldRedirect = true;
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);
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
				navigate("/dashboard");	  
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
	<Modal show={props.trigger} onHide={handleClose} centered>
		<Modal.Header closeButton onClick={handleClose}>
			<Modal.Title>Log in</Modal.Title>
		</Modal.Header >
		<Modal.Body style={{marginLeft: 40, marginRight: 40 }}>
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>Username</Form.Label>
					<Form.Control onChange={handleUsername}
						type="text"
						placeholder="Enter your username"
						autoFocus/>
				</Form.Group>
				<Form.Group className="mb-4">
					<Form.Label>Password</Form.Label>
					<Form.Control onChange={handlePassword}
					type="password"
					placeholder="Enter your password"/>
				</Form.Group>
				<Form.Group className="d-grid">
					<Button variant="primary" size="lg" onClick={handleLogin} type="submit">Login</Button>{' '}
				</Form.Group>
			</Form>
		</Modal.Body>
		<Modal.Footer>
		{/* <div className="messages">
			{errorMessage()}
			{statusMessage()}
		</div> */}
		</Modal.Footer>
	</Modal>)
		// <div className='popup'>
			
        //     <div className='popup-inner'>
		// 			<div>
		// 				<h1>Log in</h1>
		// 			</div>
					
					// <label className="label-l">Username</label>
					// <input maxLength={12}
					// onChange={handleUsername} className="input-l" 
					// value={username} type="text" />

					// <label className="label-l">Password</label>
					// <input onChange={handlePassword} className="input-l"
					// value={password} type="password" />

					// {}
					// <div className="messages">
					// 	{errorMessage()}
					// 	{statusMessage()}
					// </div>
					// <CloseButton className="button-close" type="submit" onClick={()=>props.setTrigger(false)}/>
					// <div className="d-grid mx-5 my-4">
					// 	<Button variant="primary" size="lg" onClick={handleLogin} type="submit">Login</Button>{' '}
					// </div>
		// 		</div>
				
		// </div>
	
}
