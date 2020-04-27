import React from 'react';
import NumberFormat from 'react-number-format';
import { MDBCard,MDBCol, MDBCardBody, MDBCardHeader, MDBCardFooter, MDBContainer, MDBRow } from
"mdbreact";
import './GlobalCases.css';

let date = new Date().toLocaleDateString()


const PanelPage = (props) => {
return (
<MDBContainer>
  <MDBRow>
    {/* 
    //! Total Confirmed 
    */}    
    <MDBCol className="d-flex justify-content-center" sm="12" md="4">
    <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
    <MDBCardHeader>Confirmed</MDBCardHeader>
    <MDBCardBody>
      <div className="num-confirmed">
        <span className="title">Total Cases:</span>
        <NumberFormat value={props.t_confirmed} displayType={'text'} thousandSeparator={true}/>
        <div className="new_cases">
          <span className="title">New Cases:</span>
          <NumberFormat value={props.n_confirmed} displayType={'text'} thousandSeparator={true}/>
        </div>
      </div>
    </MDBCardBody>
    <MDBCardFooter>Date: {date} </MDBCardFooter>
  </MDBCard>
    </MDBCol>
    {/* 
    //! Total Recovered 
    */}
    <MDBCol className="d-flex justify-content-center" sm="12" md="4">
    <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
    <MDBCardHeader>Recovered</MDBCardHeader>
    <MDBCardBody>
    <div className="num-recovered">
      <span className="title">Total Cases:</span>
    <NumberFormat value={props.t_recovered} displayType={'text'} thousandSeparator={true}/>
    <div className="new_cases">
      <span className="title">New Cases:</span>
      <NumberFormat value={props.n_recovered} displayType={'text'} thousandSeparator={true}/>
    </div>
    </div>
    </MDBCardBody>
    <MDBCardFooter>Date: {date}</MDBCardFooter>
  </MDBCard>
    </MDBCol>
    {/* 
    //! Total Deaths 
    */}
    <MDBCol className="d-flex justify-content-center" sm="12" md="4">
    <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
    <MDBCardHeader>Deaths</MDBCardHeader>
    <MDBCardBody>
      <div className="num-deaths">
        <span className="title">Total Cases:</span>
      <NumberFormat value={props.t_deaths} displayType={'text'} thousandSeparator={true}/>
      <div className="new_cases">
        <span className="title">New Cases:</span>
        <NumberFormat value={props.n_deaths} displayType={'text'} thousandSeparator={true}/>
      </div>
      </div>
    </MDBCardBody>
    <MDBCardFooter>Date: {date}</MDBCardFooter>
  </MDBCard>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default PanelPage;