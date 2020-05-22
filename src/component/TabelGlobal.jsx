import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container,Col, Row} from "mdbreact";
import './TabelGlobal.css'
import NumberFormat from 'react-number-format';



const TabelGlobal = (props) => {

  const {data} = props;

 
  
  const convert = (number) => {
    
    return <NumberFormat value={number} displayType={'text'} thousandSeparator={true} />
  }

    let get_data = data.map((e) => {
      return ({
        id: convert(e["#"]),
        country: e.Country,
        confirmed: convert(e.TotalCases),
        recovered: convert(e.TotalRecovered),
        deaths: convert(e.TotalRecovered),
        seriousCritical: convert(e.Serious_Critical),
        activeCases: convert(e.ActiveCases),
        
      })
    })


    const table_data = {
      columns: [
        {
          label: '#',
          field: 'id',
          sort: 'asc',
          attributes: {
            'aria-controls': 'DataTable',
            'aria-label': 'id',
          },
        },
        {
          label: 'Country',
          field: 'country',
          sort: 'asc',

        },
        {
          label: 'Total Confirmed',
          field: 'confirmed',
          sort: 'asc',
        },
        {
          label: 'Total Recovered',
          field: 'recovered',
          sort: 'asc',
        },
        {
          label: 'Total Deaths',
          field: 'deaths',
          sort: 'asc',
        },
        {
          label: 'Serious Critical',
          field: 'seriousCritical',
          sort: 'asc',
        },
        {
          label: 'Active Cases',
          field: 'activeCases',
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