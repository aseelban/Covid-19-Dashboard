import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container,Col, Row} from "mdbreact";
import './TabelGlobal.css'


const TabelGlobal = (props) => {

  const {data} = props;

 

    let get_data = data.map((e) => {
      return ({
        id: e["#"],
        country: e.Country,
        confirmed: e.TotalCases,
        recovered: e.TotalRecovered,
        deaths: e.TotalDeaths,
        seriousCritical: e.Serious_Critical,
        activeCases: e.ActiveCases,
        
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