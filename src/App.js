import React, { Component } from "react";
import ReactDOM from "react-dom";
import {  Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Covid from './component/Covid'
import News from './component/News'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import "./index.css";



class App extends Component {


  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Covid} /> 
          <Route path="/news" component={News} />
        </Switch>
      </Router>
    );
  }
}
 
export default App;


