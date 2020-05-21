import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import './Header.css';

class NonFixedNavbarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    // this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    const container = { height: 1300 }
    return (
      <div>
          <header >
            <MDBNavbar  className="--navbar navbar-dark" expand="md">
              <MDBNavbarBrand href="/">
                <strong>COVID-19</strong>
              </MDBNavbarBrand>

              <MDBNavbarToggler className="t0" onClick={this.onClick} />
              <MDBCollapse className="t1" isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem>
                    <MDBNavLink activeClassName="_active" exact  to="/">Dashboard</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink activeClassName="_active" to="/news">News</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">-</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">-</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse> 
            </MDBNavbar>
          </header>
      </div>
    );
  }
}

export default NonFixedNavbarExample;