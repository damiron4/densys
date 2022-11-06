import React, {Component} from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import form from "./form"
import loginPage from "./loginPage"
import regPatient from "./regPatient"

export default class Com extends Component{
  constructor(props){
    super(props);
    this.state = {};
    
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
                <Link to="/Form">RegDoctor</Link>
              </li>
              <li>
                <Link to="/RegPatient">RegPatient</Link>
              </li>
            </ul>
          </nav>
          
          <Switch>
            
            <Route exact path="/" component={loginPage} />
            <Route exact path="/Form" component={form}/>
            <Route exact path="/RegPatient" component={regPatient}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

