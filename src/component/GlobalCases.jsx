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

    {/* //! TOTAL CASES */}

  <MDBCol className="d-flex justify-content-center" sm="12" md="4">
    <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
    <MDBCardHeader>TOTAL CASES</MDBCardHeader>
    <MDBCardBody>
      <div  className="c-yle">
        <span className="title">Confirmd:</span>
        <NumberFormat value={props.cases} displayType={'text'} thousandSeparator={true}/>
      </div>
      <div  className="c-gre">
      <span className="title">Recovered:</span>
      <NumberFormat value={props.recovered} displayType={'text'} thousandSeparator={true}/>
      </div>
      <div  className="c-red">
        <span className="title">Deaths:</span>
      <NumberFormat value={props.deaths} displayType={'text'} thousandSeparator={true}/>
      </div>
    </MDBCardBody>
    <MDBCardFooter>Date: {date} </MDBCardFooter>
  </MDBCard>
    </MDBCol> 

    {/* //! ACTIVE CASES */}

    <MDBCol className="d-flex justify-content-center" sm="12" md="4">
    <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
    <MDBCardHeader>ACTIVE CASES</MDBCardHeader>
    <MDBCardBody>
    <div  className="c-yle">
      <span className="title">currently infected patients:</span>
    <NumberFormat value={props.active_cases.currently_infected_patients} displayType={'text'} thousandSeparator={true}/>
    </div>
    <div  className="c-red">
        <span className="title">Serious or Critical:</span>
      <NumberFormat value={props.active_cases.criticalStates} displayType={'text'} thousandSeparator={true}/>
      </div>
      <div  className="c-blu">
        <span className="title">In Mid Condition:</span>
      <NumberFormat value={props.active_cases.inMidCondition} displayType={'text'} thousandSeparator={true}/>
      </div>
    </MDBCardBody>
    <MDBCardFooter>Date: {date}</MDBCardFooter>
  </MDBCard>
    </MDBCol>

    {/* //! CLOSED CASES */}

    <MDBCol className="d-flex justify-content-center" sm="12" md="4">
    <MDBCard style={{ width: "22rem", marginTop: "1rem" }} className="text-center">
    <MDBCardHeader>CLOSED CASES</MDBCardHeader>
    <MDBCardBody>
    <div  className="c-yle">
      <span className="title">Cases which had an outcome:</span>
    <NumberFormat value={props.closed_cases.cases_which_had_an_outcome} displayType={'text'} thousandSeparator={true}/>
    </div>
    <div  className="c-blu">
        <span className="title">Recovered / Discharged:</span>
      <NumberFormat value={props.closed_cases.recovered} displayType={'text'} thousandSeparator={true}/>
      </div>
      <div  className="c-red">
        <span className="title">Deaths:</span>
      <NumberFormat value={props.closed_cases.deaths} displayType={'text'} thousandSeparator={true}/>
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