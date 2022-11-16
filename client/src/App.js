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

function App() {
  return (
    <>
          <nav>
            <ul>
              <li>
                <Link to="/">LoginPage</Link>
              </li>
              <li>
                <Link to="/RegDoctor">RegDoctor</Link>
              </li>
              <li>
                <Link to="/RegPatient">RegPatient</Link>
              </li>
              <li>
                <Link to="/DoctorMP">ViewUp</Link>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" exact element={<LoginPage />} />
            <Route path="/RegDoctor" exact element={<RegDoctor/>}/>
            <Route path="/RegPatient" exact element={<RegPatient/>}/>
            <Route path="/DoctorMP" exact element={<DoctorMP/>}/>
          </Routes>
    </>
  );
}
 
export default App;