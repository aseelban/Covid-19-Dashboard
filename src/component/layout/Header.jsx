import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBContainer } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Header.css';

class NonFixedNavbarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const container = { height: 1300 }
    return (
      <div>
        <Router>
          <header >
            <MDBNavbar className="--navbar" expand="md">
              <MDBNavbarBrand href="/">
                <strong>Covid-19 Dashboard</strong>
              </MDBNavbarBrand>
              {/* // Disable Collapse - in next features */}
              {/* <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Features</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Pricing</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Opinions</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse> */}
            </MDBNavbar>
          </header>
        </Router>
      </div>
    );
  }
}

export default NonFixedNavbarExample;