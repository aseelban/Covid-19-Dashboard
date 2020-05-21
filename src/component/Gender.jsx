import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import { Container,Col, Row,MDBCard,MDBCardBody,MDBTableBody, MDBTableHead,MDBTable} from "mdbreact";
import './Gender.css'



const Gender = (props) => {


    const removeTheDot = (arr) => {
        return arr.join('.').replace(/\,/gi, '').split('.')
        }

      

        

    //   !!______________

      //* get death rate by confiremd cases
    let gn_all_confirmed_cases = props.gender_data.map((e) => {
        return e.DeathRateConfirmedCases
    })


     //   !!______________

    //* get death rate by all cases
    let gn_all_cases = props.gender_data.map((e) => {
    return e.DeathRateAllCases
    })

    //   !!______________



    const gender_data = {
        labels: [
          'Male',
          'Female',
        ],
        datasets: [{
          data: removeTheDot(gn_all_confirmed_cases),
          backgroundColor: [
          '#FF6384',
          '#36A2EB',
          ],
          hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          ],

        }],
        options: {
          legend: {
             labels: {
                fontColor: 'white' //set your desired color
             }
          }
       }
        
      };

    //   !!______________

      const render_data = props.gender_data.map((e,index) => {
        return <tr>
        <td>{e.PreExistingCondition}</td>
        <td>{e.DeathRateConfirmedCases}</td>
        <td>{e.DeathRateAllCases}</td>
        <td>{e["3"]}</td>
        <td>{e["4"]}</td>
        <td>{e["5"]}</td>
        <td>{e["6"]}</td>
        <td>{e["7"]}</td>
        <td>{e["8"]}</td>
            </tr>
      })

     //   !!______________

    







     return (
        <Container>
          <Row className="d-flex justify-content-center">
          <Col sm="12 mb-2">
                <div className="tabel-title"><i class="fa fa-hospital-o" aria-hidden="true"></i>
                Age, Sex, Existing Conditions of COVID-19 Cases and Deaths</div>
          </Col>
            <Col className="mt-2" sm="12" md="4">
              <MDBCard>
                <MDBCardBody>
                  <h2 className="title-txt" style={{'color': '#fff'}}>Sex ratio</h2>
                  <p className="source-txt">Data provided by <a href="https://www1.nyc.gov/assets/doh/downloads/pdf/imm/covid-19-daily-data-summary-deaths-04152020-1.pdf" target="_blank">New York City Health</a> as of April 14, for known sex of deceased:</p>
                  <Doughnut 
                  data={gender_data}           
                  options={{
                  legend : {
                    labels: {
                      fontColor: '#D1D7D7' 
                   }
                  }
                  }}
                  />
                  <p className="rate-txt" style={{'color': '#fff'}}><span className="gender-txt">Male </span>Share of Deaths: <span className="rate-value">{gn_all_cases[0]}</span></p>
                  <p className="rate-txt" style={{'color': '#fff'}}><span className="gender-txt">Female </span>Share of Deaths: <span className="rate-value">{gn_all_cases[1]}</span></p>
                </MDBCardBody>
              </MDBCard>
            </Col>
  
            {/* //! age section */}
            <Col className="mt-2 gender-table" md="8">
            <MDBTable hover responsive >
              <MDBTableHead color="unique-color" textWhite>
              <tr>
                <th>Gender</th>
                <th>Deaths</th>
                <th>Share of Deaths</th>
                <th>With underlying conditions</th>
                <th>Share within this category</th>
                <th>Without underlying conditions</th>
                <th>Share within this category</th>
                <th>Unknown if with cond</th>
                <th>Share within this category</th>
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
 
export default Gender;