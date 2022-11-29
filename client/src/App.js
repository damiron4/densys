import './App.css';
import {
  Route,
  Link,
  Routes
} from "react-router-dom"
import RegDoctor from "./RegDoctor"
import LoginPage from "./loginPage"
import RegPatient from "./regPatient"
import DoctorMP from "./DoctorMP"
import Appointment from './Appointment';
import Form from './Form';
function App() {
  return (
    <>
          <nav>
            <ul>
              <li>
                <Link to="/login-admin">LoginPage</Link>
              </li>
              <li>
                <Link to="/register-doctor">RegDoctor</Link>
              </li>
              <li>
                <Link to="/register-patient">RegPatient</Link>
              </li>
              {/* <li>
                <Link to="/AdministratorMP">AdministratorMP</Link>
              </li> */}
              <li>
                <Link to="/doctorMP">DoctorMP</Link>
              </li>
              <li>
                <Link to="/appointment-form">Appointment</Link>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/login-admin" exact element={<LoginPage />} />
            <Route path="/register-doctor" exact element={<RegDoctor/>}/>
            <Route path="/register-patient" exact element={<RegPatient/>}/>
            {/* <Route path="/AdministratorMP" exact element={<AdministratorMP/>}/> */}
            <Route path="/doctorMP" exact element={<DoctorMP/>}/>
            <Route path="/appointment-form" exact element={<Appointment/>}/>
            <Route path="/doctorMP/:id" exact element={<Form/>}/>
          </Routes>
    </>
  );
}
 
export default App;