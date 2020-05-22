import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container,Col, Row} from "mdbreact";
import './TabelGlobal.css'
import NumberFormat from 'react-number-format';



const TabelGlobal = (props) => {

  const {data} = props;

 
  // const convert = (number) => {
    
  //   return <NumberFormat value={number} displayType={'text'} thousandSeparator={true} />
  // }

  //   let get_data = data.map((e) => {
  //     return ({
  //       id: convert(e["#"]),
  //       country: e.Country,
  //       confirmed: convert(e.TotalCases),
  //       recovered: convert(e.TotalRecovered),
  //       deaths: convert(e.TotalRecovered),
  //       seriousCritical: convert(e.Serious_Critical),
  //       activeCases: convert(e.ActiveCases),
        
  //     })
  //   })






    let get_data = data.map((e) => {
      return ({

        confirmed: e.TotalCases,

        
      })
    })


    const table_data = {
      columns: [

        {
          label: 'Total Confirmed',
          field: 'confirmed',
          sort: 'asc',
        },
      ],
    rows: get_data
    };


  return (
    <Container className="mt-3">
     <Row className="py-3">
      <Col md="12">

          <MDBDataTable responsive
        striped
        bordered
        hover
        data={table_data}>
        </MDBDataTable>
          />
          
      </Col>
    </Row> 
  </Container>
  );
}

export default TabelGlobal;