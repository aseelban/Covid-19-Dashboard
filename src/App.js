import React, { Component } from "react";
import ReactDOM from "react-dom";
import Covid from './component/Covid'
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import "./index.css";



class App extends Component {


  render() {
    return (
      <div>
        <Covid />
      </div>
    );
  }
}
 
export default App;


