import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import { Container,Col, Row,MDBCard,MDBCardBody,MDBTableBody, MDBTableHead,MDBTable} from "mdbreact";
import './Age.css'



const Age = (props) => {

    function removeTheDot(arr){
        return arr.join('.').replace(/\,/gi, '').split('.')
        }


    function removeThepercentage(arr){
    return arr.join(',').replace(/\%/gi, '').split(',')
    }





  //* get death rate by confiremd cases
  let confirmed_cases = props.data.map((e) => {
    return e.DeathRateConfirmedCases
  })

  //* get death rate by all cases
let total_cases = props.data.map((e) => {
  return e.DeathRateAllCases
})

//* get gender 
let gednder_type = props.data.map((e) => {
  return e.Age
})


  const data = {
    labels: gednder_type,
    datasets: [{
      data: removeTheDot(confirmed_cases),
      backgroundColor: [
      '#BD80FF',
      '#4c6474',
      '#33FFBD',
      '#FFBD33',
      '#FF6384',
      '#36A2EB'
      ],
      hoverBackgroundColor: [
        '#BD80FF',
        '#4c6474',
        '#33FFBD',
        '#FFBD33',
        '#FF6384',
        '#36A2EB'
      ]
    }],
    
  };

    // !____________________________


// ! chart section 
  let getLabels = props.data.map((e) => e.Age);
  let getCases = props.data.map((e) => e.DeathRateConfirmedCases);


  console.log(removeTheDot(getCases))
  const data2 = {
    labels: getLabels,
    datasets: [
      {
        label: 'Total cases',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: removeTheDot(getCases)
      }
    ]
  };


    // !____________________________



    const render_data = props.data.map((e,index) => {
        return <tr>
        <td>{e.Age}</td>
        <td>{e.DeathRateConfirmedCases}</td>
        <td>{e.DeathRateAllCases}</td>
        <td>{e["3"]}</td>
        <td>{e["4"]}</td>
        <td>{e["5"]}</td>
        <td>{e["6"]}</td>
            </tr>
      })






    return (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col className="mt-2" sm="12" md="4">
              <MDBCard>
                <MDBCardBody>
                  <h2 className="title-txt" style={{'color': '#fff'}}>Age of Coronavirus Deaths</h2>
                  <p className="source-txt">Data provided by <a href="https://www1.nyc.gov/assets/doh/downloads/pdf/imm/covid-19-daily-data-summary-deaths-04152020-1.pdf" target="_blank">New York City Health</a> as of April 14, for known sex of deceased:</p>
                  <Doughnut 
                  data={data}
                  options={{
                    legend : {
                      labels: {
                        fontColor: '#D1D7D7' 
                     }
                    }
                    }}
                  />
                </MDBCardBody>
              </MDBCard>
            </Col>
  
            {/* //! age section */}
            <Col className="mt-2 age-table" md="8">
            <MDBTable hover responsive>
              <MDBTableHead color="unique-color" textWhite>
              <tr>
              <th>Age</th>
              <th>Number of Deaths</th>
              <th>Share of deaths</th>
              <th>With underlying conditions</th>
              <th>Without underlying conditions</th>
              <th>Unknown if with underlying cond</th>
              <th>Share of deaths of unknown + w/o cond</th>
              </tr>
            </MDBTableHead>
          <MDBTableBody>
        {render_data}
      </MDBTableBody>
    </MDBTable>
            </Col>
          </Row>
        </Container>
      );

}
 
export default Age;