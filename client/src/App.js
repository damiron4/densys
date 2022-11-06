import React, {Component} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Form from "./Form"
import LoginPage from "./LoginPage"
import RegistrationDoctor from "./RegistrationDoctor"



class App extends Component{
  constructor(props){
    super(props);
    this.state={

    };
  }

  render(){
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">LoginPage</Link>
              </li>
              <li>
                <Link to="/Form">Form</Link>
              </li>
              <li>
                <Link to="/RegistrationDoctor">RegistrationDoctor</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" Component={LoginPage}/>
            <Route exact path="/Form" Component={Form}/>
            <Route exact path="/RegistrationDoctor" Component={RegistrationDoctor}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <Form />
//     </div>
     
//   );
// }
 
export default App;