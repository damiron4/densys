
import { useEffect, useState } from 'react';
import Footer from "./components/footer";
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from './components/header';
// import LoginPopup from './components/loginPopup';

export default function MainPage() {
    const [contacts, setContacts] = useState([]);
    const [buttonPopup, setButtonPopup] = useState(false);

	useEffect(() =>{
		Axios.get("http://localhost:5001/departments").then((response) => {
			setContacts(response.data);
		});
	
	}, []);

	return (

		<div className="background">
                <Header/>
				<section class= "body">
                <Row xs={0} md={5} className="g-4">
				{contacts.map((contact)=>  
					<Col>
						<Card style={{ width: '18rem', height: '21rem'}}>
						<Card.Body>
							<Card.Title>{contact.name}</Card.Title>
							<Card.Text>
							Description: {contact.description}
							</Card.Text>

							<Dropdown>
							</Dropdown>
						</Card.Body>
						</Card>
					</Col>
					)}
				</Row>
				</section>
			<Footer/>
		</div>
	);
}
