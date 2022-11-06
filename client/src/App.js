import React, {Component} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Form from "./form"
import LoginPage from "./loginPage"
import RegistrationDoctor from "./registrationDoctor"



export default class App extends Component{
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
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/registrationDoctor">RegistrationDoctor</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/">
              <LoginPage />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/registrationDoctor">
              <RegistrationDoctor />
            </Route>
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
 
// export default App;