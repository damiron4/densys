import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
// import LoginPopup from './loginPopup';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
	// const [buttonPopup, setButtonPopup] = useState(false);
	const [role, setRole] = useState('');
	const [userType, setUserType] = useState("admin");
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loginStatus, setLoginStatus] = useState('');
	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	
	Axios.defaults.withCredentials = true;
	useEffect(()=> {
		Axios.get("http://localhost:5001/login").then((response) => {
			if (response.data.loggedIn) {
				setRole(response.data.user.role);
				setUsername(response.data.user.username);
			}
		});
	}, []);

	const logOut = (e) => {
		e.preventDefault();
		Axios.delete("http://localhost:5001/logout");
		window.location.reload();
	}

	const handleClose = () => {
		setShow(false);
	}

	const handleUsername = (e) => {
		setUsername(e.target.value);
	}
	
	const handlePassword = (e) => {
		setPassword(e.target.value);
	}

	const handleLogin = async e => {
		e.preventDefault();
		if (username === '' || password === '' ) {
			setLoginStatus('Please fill in all fields.');
			return
		}
		try {
			const body = {username, password, userType}
			const response = await fetch("http://localhost:5001/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify(body)
			});
			const jsonData = await response.json();
			console.log(jsonData);
			if (jsonData.message) {
				if (jsonData.message === "Wrong username or password.") {
					setLoginStatus(jsonData.message);
				} else if (jsonData.message === "Login successful.") {
					handleClose();
					navigate("/dashboard");
				}
			}
		} catch (error) {
			console.error(error.message);
		}
	};
	
    return (
	<>
	<Navbar expand="lg" className="fixed-top bg-dark bg-gradient">
      <Container>
        <Navbar.Brand className="text-light" href="/">Densys</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
			<Nav.Link className="text-light" href="/">Home</Nav.Link>
			<Nav.Link className="text-light" href="/dashboard">Dashboard</Nav.Link>
			{/* <Nav.Link href="#link">Link</Nav.Link> */}
			{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
				<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.2">
					Another action
				</NavDropdown.Item>
				<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
				<NavDropdown.Divider />
				<NavDropdown.Item href="#action/3.4">
					Separated link
				</NavDropdown.Item>
			</NavDropdown> */}
		</Nav>
		  
		<Nav className="d-flex">
			{(role === '') &&
			<div>
				<Button variant="outline-light" onClick={()=>{setShow(true); setLoginStatus('');}}>Login</Button>
				<Modal show={show} onHide={handleClose} centered>
					<Modal.Header closeButton onClick={handleClose}>
						<Modal.Title>Log in</Modal.Title>
					</Modal.Header >
					<Modal.Body style={{marginLeft: 40, marginRight: 40 }}>
						<Form style={{marginBottom: 40}}>
							<div><Form.Label>Log in as</Form.Label></div>
							<ButtonGroup className="ml-4 mb-2">
								<ToggleButton type="radio" variant="outline-info" name="patient" value="patient" checked = {userType === "patient"} onClick={(e) => setUserType("patient")}>
									Patient
								</ToggleButton>
								<ToggleButton type="radio" variant="outline-info" name="doctor" value="doctor" checked = {userType === "doctor"} onClick={(e) => setUserType("doctor")}>
									Staff
								</ToggleButton>
								<ToggleButton type="radio" variant="outline-info" name="admin" value="admin" checked = {userType === "admin"} onClick={(e) => setUserType("admin")}>
									Administration
								</ToggleButton>
							</ButtonGroup>
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
							<Form.Group className="d-grid mb-3">
								<Button variant="info" size="lg" onClick={handleLogin} type="submit">Login</Button>{' '}
							</Form.Group>
							{ (loginStatus) &&
							<Form.Group >
								<Alert  key="danger" variant="danger">
								{loginStatus}
								</Alert>
							</Form.Group>}
						</Form>
					</Modal.Body>
				</Modal>
			</div>
			}
			{(role !== '') &&
			<NavDropdown className="text-light" title={username} id="basic-nav-dropdown">
			<NavDropdown.Item onClick={logOut}>Log out</NavDropdown.Item>
			</NavDropdown>
			}
		</Nav>
		  
        </Navbar.Collapse>
      </Container>
    </Navbar>
	<div className="site-header"></div>
	</>
    )
};