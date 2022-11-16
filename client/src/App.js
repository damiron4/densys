import './App.css';
import {
  Route,
  Link,
  Routes
} from "react-router-dom"
import RegDoctor from "./RegDoctor"
import LoginPage from "./LoginPage"
import RegPatient from "./RegPatient"
import AdministratorMP from "./AdministratorMP"

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
              <li>
                <Link to="/AdministratorMP">AdministratorMP</Link>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/login-admin" exact element={<LoginPage />} />
            <Route path="/register-doctor" exact element={<RegDoctor/>}/>
            <Route path="/register-patient" exact element={<RegPatient/>}/>
            <Route path="/AdministratorMP" exact element={<AdministratorMP/>}/>
          </Routes>
    </>
  );
}
 
export default App;