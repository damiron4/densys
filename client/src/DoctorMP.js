import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

export default function DoctorMP(){
    return (
    <div>
        <header className="site-header">
            <div class="container">
                <p><ht class="back-ht"><Link className="text-link" to="/">A-Clinic</Link></ht></p>
                  <p>Main Page</p>
                  <p><Link className="text-link" to="/RegDoctor">Register Doctor</Link></p>
                  <p><Link className="text-link" to="/RegPatient">Register Patient</Link></p>
            </div>
        </header>
    
        
        
           <div class = "table_a">
            
            <tr></tr>

            </div>
            {}
            <div className="messages">

            </div>
    
            <button  className="btn" type="submit">
            Login
            </button>
        
        <footer class="site-footer">
          <div class="con">
            <p>© A-Clinic</p>
            <p>Welcome to A-Clinic, Health Care website</p>
          </div>
        </footer>
        </div>);
}