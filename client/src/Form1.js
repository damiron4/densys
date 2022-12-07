import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "./components/header";
import Footer from "./components/footer";
import Container from 'react-bootstrap/Container';
import { useState, Fragment,useEffect } from 'react';
import { Link , useParams} from "react-router-dom";
import data from "./mock-data.json";
import DatePicker from 'react-datepicker';


function FormDoc() {
	const {id} = useParams();
	const [contacts, setContacts] = useState(data);  //Ali scsfa
	const [dbirth, setDbirth] = useState(new Date());
	const [submitted, setSubmitted] = useState(false);

	const [editFormData, setEditFormData] = useState({
    name: "",
    surname: "",
    midname: "",
    dbirth: "",
    iin:"",
    contactn:"",
    depid:"",
    specid:"",
	email:"",
	address:"",
	govid:"",
	price:"",
	category:"",
	exp:"",
	degree:""
	});
	const handleDbirth = (e) => {
		setDbirth(e.target.value.toUpperCase());
		setSubmitted(false);
	}


return (
<div className="background">
	<Header/>
	<div className='body'>
	<div className='body-1'>
	{contacts.map((contact)=> (contact.id== id ? ( 
	<Container class="container rounded bg-white mt-5 mb-5">
    <Row>
        <Col class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">{contact.name}</span><span class="text-black-50">{contact.email}</span><span> </span></div>
        </Col>
        <Col class="col-md-5 border-right">
            <div class="p-3 py-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <Row class="row mt-2">
                    <Col class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder={contact.name} value=""/></Col>
                    <Col class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder={contact.surname}/></Col>
                </Row>
                <Col class="row mt-3">
					<Col class="col-md-12"><label class="labels">Middle Name</label><input type="text" class="form-control" value="" placeholder={contact.midname}/></Col>
					<Row class="row mt-2">
						<Col class="col-md-6"><label class="labels">INN</label><input type="text" class="form-control" value="" placeholder={contact.iin}/></Col>
						<Col class="col-md-6"><label class="labels">Governmental ID</label><input type="text" class="form-control" value="" placeholder={contact.govid}/></Col>
					</Row>
					<Col class="col-md-12"><label class="labels">Date of birth</label><DatePicker class="form-control" placeholderText={contact.dbirth} onChange={(date:Date) => setDbirth(date)}/></Col>
					<Col class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder={contact.contactn} value=""/></Col>
                    <Col class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder={contact.address} value=""/></Col>
                    <Col class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder={contact.email} value=""/></Col>
					
                </Col>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </Col>
        <Col class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span></span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div>
                <Col class="col-md-12"><label class="labels">Category</label><input type="text" class="form-control" placeholder={contact.category} value=""/></Col>
					<Row class="row mt-2">
						<Col class="col-md-6"><label class="labels">Degree</label><input type="text" class="form-control" value="" placeholder={contact.degree}/></Col>
						<Col class="col-md-6"><label class="labels">Experience</label><input type="number" class="form-control" value="" placeholder={contact.exp}/></Col>
					</Row>
					<Row class="row mt-2">
						<Col class="col-md-6"><label class="labels">Department ID</label><input type="text" class="form-control" value="" placeholder={contact.depid}/></Col>
						<Col class="col-md-6"><label class="labels">Specialization ID</label><input type="text" class="form-control" value="" placeholder={contact.specid}/></Col>
					</Row>
					<Col class="col-md-12"><label class="labels">Price</label><input type="number" class="form-control" placeholder={contact.price} value=""/></Col>
        </div>
    </Col>
</Row>
</Container>):null))}
</div>
</div>
<Footer/>
</div>
	);
  }
  
  export default FormDoc;