import React from "react";
import {MDBContainer, MDBFooter } from "mdbreact";
import './Footer.css'

const Footer = () => {
  return (
    <MDBFooter className="font-small pt-4 mt-5">
      <div style={{background: '#1C2331'}} className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Made With <i style={{color: '#d41c1c'}} className="fa fa-heart" aria-hidden="true"></i> by Aseelban
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;