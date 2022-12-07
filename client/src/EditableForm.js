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





        const EditableForm = ({
            editFormData,
            handleEditFormChange,
            handleCancelClick,
            
          }) => {

            const [datebirth, setDbirth] = useState(new Date());
return (
	<Container class="container rounded bg-white mt-5 mb-5">
    <Row>
        <Col class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold">{editFormData.name}</span><span class="text-black-50">{editFormData.email}</span><span> </span></div>
        </Col>
        <Col class="col-md-5 border-right">
            <div class="p-3 py-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <Row class="row mt-2">
				
                    <Col class="col-md-6"><label class="labels">Name</label><Form.Control
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                    required
                /></Col>
                    <Col class="col-md-6"><label class="labels">Surname</label><Form.Control
                    type="text"
                    placeholder="Surname *"
                    name="surname"
                    value={editFormData.name}
                    onChange={handleEditFormChange}
                    required
                /></Col>
                </Row>
                <Col class="row mt-3">
					<Col class="col-md-12"><label class="labels">Middle Name</label><Form.Control
                    type="text"
                    placeholder="Middle Name *"
                    name="midname"
                    value={editFormData.midname}
                    onChange={handleEditFormChange}
                    required/></Col>
					<Row class="row mt-2">
						<Col class="col-md-6"><label class="labels">INN</label><Form.Control
                    type="text"
                    placeholder="IIN *"
                    name="iin"
                    value={editFormData.iin}
                    onChange={handleEditFormChange}
                    required/></Col>
						<Col class="col-md-6"><label class="labels">Governmental ID</label><Form.Control
                    type="text"
                    placeholder="Govermental ID *"
                    name="govid"
                    value={editFormData.govid}
                    onChange={handleEditFormChange}
                    required/></Col>
					</Row>
					<Col class="col-md-12"><label class="labels">Date of birth</label><DatePicker class="form-control" placeholderText={editFormData.dbirth} selected={datebirth} onChange={(date:Date) => setDbirth(date)}/></Col>
					<Col class="col-md-12"><label class="labels">Mobile Number</label><Form.Control
                    type="text"
                    placeholder="Contact Number *"
                    name="contactn"
                    value={editFormData.contactn}
                    onChange={handleEditFormChange}
                    required/></Col>
                    <Col class="col-md-12"><label class="labels">Address</label><Form.Control
                    type="text"
                    placeholder="Address *"
                    name="address"
                    value={editFormData.address}
                    onChange={handleEditFormChange}
                    required/></Col>
                    <Col class="col-md-12"><label class="labels">Email</label><Form.Control
                    type="text"
                    placeholder="Email *"
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                    /></Col>
					
                </Col>
                
            </div>
        </Col>
        <Col class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span></span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div>
                <Col class="col-md-12"><label class="labels">Category</label><Form.Control
                    type="text"
                    placeholder="Category *"
                    name="category"
                    value={editFormData.category}
                    onChange={handleEditFormChange}
                    required/></Col>
					<Row class="row mt-2">
						<Col class="col-md-6"><label class="labels">Degree</label><Form.Control
                    type="text"
                    placeholder="Degree *"
                    name="degree"
                    value={editFormData.degree}
                    onChange={handleEditFormChange}
                    required/></Col>
						<Col class="col-md-6"><label class="labels">Experience in years</label><Form.Control
                    type="text"
                    placeholder="Experience  *"
                    name="exp"
                    value={editFormData.exp}
                    onChange={handleEditFormChange}
                    required/></Col>
					</Row>
					
					<Row class="row mt-2">
						<Col class="col-md-6"><label class="labels">Department ID</label><Form.Control
                    type="text"
                    placeholder="Department ID *"
                    name="depid"
                    value={editFormData.depid}
                    onChange={handleEditFormChange}
                    required/></Col>
						<Col class="col-md-6"><label class="labels">Specialization ID</label><Form.Control
                    type="text"
                    placeholder="Specialization ID *"
                    name="specid"
                    value={editFormData.specid}
                    onChange={handleEditFormChange}
                    required/></Col>
					</Row>
					
					<Col class="col-md-12"><label class="labels">Price</label><Form.Control
                    type="number"
                    placeholder="Price *"
                    name="price"
                    value={editFormData.price}
                    onChange={handleEditFormChange}
                    required/></Col>

                    
                    <Col><div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit">Save Profile</button>
                 <button class="btn btn-primary profile-button" type="buttoh" onClick={handleCancelClick} >Cancel</button></div>     </Col>
                
        </div>
    </Col>
</Row>

</Container>
	);
  }
  
  export default EditableForm;