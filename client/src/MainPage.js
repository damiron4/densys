
import { useEffect, useState } from 'react';
import Footer from "./components/footer";
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {Link} from 'react-router-dom';
import LoginPopup from './loginPopup';

export default function MainPage() {
    const [contacts, setContacts] = useState([]);
    const[buttonPopup,setButtonPopup]=useState(false);

	useEffect(() =>{
		Axios.get("http://localhost:5000/departments").then((response) => {
			setContacts(response.data);
		});
	
	}, []);

	return (

		<div className="background">
                <header className="site-header">
                    <div className="container">
                    <p><ht className="back-ht"><Link className="text-link" to="/">A-Clinic</Link></ht></p>
                    <p><Link className="text-link" to="/">Main Page</Link></p>
                    <button class="button2" onClick={()=>setButtonPopup(true)}>Login</button>
                    </div>
                </header>
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
                <LoginPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
					<h3>My popup</h3>
				</LoginPopup>

				</section>
			<Footer/>
		</div>
	);
}
