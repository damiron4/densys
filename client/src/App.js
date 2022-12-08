import './App.css';
import { Route, Link, Routes } from "react-router-dom";

import RegDoctor from "./RegDoctor";
import RegPatient from "./regPatient";
import DoctorList from "./DoctorList";
import PatientList from "./PatientList";
import Appointment from './Appointment';
import FormDoc from './Form';
import Boxlist from './box-list';
import MainPage from './MainPage';
import Dashboard from './Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
          {/* <nav>
            <ul>
              <li>
                <Link to="/main">Main Page</Link>
              </li>
              <li>
                <Link to="/register/doctor">RegDoctor</Link>
              </li>
              <li>
                <Link to="/register/patient">RegPatient</Link>
              </li>
              <li>
                <Link to="/patientMP">PatientMP</Link>
              </li>
              <li>
                <Link to="/doctorMP">DoctorMP</Link>
              </li>
              <li>
                <Link to="/appointment-form">Appointment</Link>
              </li>
            </ul>
          </nav> */}
          
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/main" exact element={<MainPage />} />
            <Route path="/register/doctor" exact element={<RegDoctor/>}/>
            <Route path="/register/patient" exact element={<RegPatient/>}/>
            <Route path="/dashboard" exact element={<Dashboard/>}/>
            <Route path="/patients" exact element={<PatientList/>}/>
            <Route path="/doctors" exact element={<DoctorList/>}/>
            <Route path="/appointment-form" exact element={<Appointment/>}/>
            <Route path="/doctors/:id" exact element={<FormDoc/>}/>
            {/* <Route path="/doctorMP/:id" exact element={<Form/>}/>
            <Route path="/patientList/:id" exact element={<Form/>}/> */}
            <Route path="/appointment-form/:id" exact element={<Boxlist/>}/>
          </Routes>
    </>
  );
}
 
export default App;