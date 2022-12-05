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
	const [error, setError] = useState(false);
	const [loginStatus, setLoginStatus] = useState('');
	const navigate = useNavigate();

	const [show, setShow] = useState(false);
	
	Axios.defaults.withCredentials = true;
	useEffect(()=> {
		Axios.get("http://localhost:5000/login").then((response) => {
			if (response.data.loggedIn) {
				setRole(response.data.user.role);
				setUsername(response.data.user.username);
			}
		});
	}, []);

	const logOut = (e) => {
		e.preventDefault();
		Axios.delete("http://localhost:5000/logout");
		window.location.reload();
	}

	const getValue = (type) => {
		const element = document.getElementsByName(type);
		if (element.value == userType) {
			element.checked = true;
		}
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
			setError(true);
			setLoginStatus('');
			return
		}
		try {
			const body = {username, password, userType}
			const response = await fetch("http://localhost:5000/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include",
				body: JSON.stringify(body)
			});
			const jsonData = await response.json();
			console.log(jsonData);
			if (jsonData.message) {
				setLoginStatus(jsonData.message);
				// navigate("/dashboard");	  
				if (jsonData.message === "Login successful.") {
					navigate("/dashboard");	  
				}
			}
		} catch (error) {
			console.error(error.message);
		}
	};
	
    return (
    // <header className="site-header">
	// 	<div className="container">
	// 	<p><ht className="back-ht"><Link className="text-link" to="/">A-Clinic</Link></ht></p>
    //   		<p><Link className="text-link" to="/">Main Page</Link></p>
    //   		<p>Register Doctor</p>
    //   		<p><Link className="text-link" to="/register/patient">Register Patient</Link></p>
	// 	</div>
	// </header>
	
	<Navbar bg="light" expand="lg">
      <Container>
		
        <Navbar.Brand href="/">A-Clinic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
			<Nav.Link href="/">Home</Nav.Link>
			<Nav.Link href="/dashboard">Dashboard</Nav.Link>
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
				<Nav.Link onClick={()=>{setShow(true); setLoginStatus('');}}>Login</Nav.Link>
				<Modal show={show} onHide={handleClose} centered>
					<Modal.Header closeButton onClick={handleClose}>
						<Modal.Title>Log in</Modal.Title>
					</Modal.Header >
					<Modal.Body style={{marginLeft: 40, marginRight: 40 }}>
						<Form style={{marginBottom: 0}}>
							{/* <Form.Label>Log in as</Form.Label> */}
							<ButtonGroup className="ml-4 mb-2">
								<ToggleButton type="radio" variant="secondary" name="patient" value="patient" checked = {userType === "patient"} onClick={(e) => setUserType("patient")}>
									Patient
								</ToggleButton>
								<ToggleButton type="radio" variant="secondary" name="doctor" value="doctor" checked = {userType === "doctor"} onClick={(e) => setUserType("doctor")}>
									Staff
								</ToggleButton>
								<ToggleButton type="radio" variant="secondary" name="admin" value="admin" checked = {userType === "admin"} onClick={(e) => setUserType("admin")}>
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
								<Button variant="primary" size="lg" onClick={handleLogin} type="submit">Login</Button>{' '}
							</Form.Group>
							{ (loginStatus) &&
							<Form.Group>
								<Alert key="danger" variant="danger">
								{loginStatus}
								</Alert>
							</Form.Group>}
						</Form>
					</Modal.Body>
					<Modal.Footer>
					{/* <div className="messages">
						{errorMessage()}
						{statusMessage()}
					</div> */}
				</Modal.Footer>
			</Modal>
			</div>
			}
			{(role !== '') &&
			<NavDropdown title={username} id="basic-nav-dropdown">
			<NavDropdown.Item onClick={logOut}>Log out</NavDropdown.Item>
			</NavDropdown>
			}
		</Nav>
		  
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
};