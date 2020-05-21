import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container,Col, Row, MDBTableBody, MDBTableHead} from "mdbreact";
import './TabelGlobal.css'


const TabelGlobal = (props) => {

  const {data} = props;

 

    let get_data = data.map((e,i) => {
      return ({
        id: i+1,
        Country: e.Country,
        Confirmed: e.TotalCases,
        Recovered: e.TotalRecovered,
        Deaths: e.TotalDeaths,
        Serious_Critical: e.Serious_Critical,
        Active_Cases: e.ActiveCases,
        
      })
    })


    const table_data = {
      columns: [
        {
          label: '#',
          field: 'id',
          sort: 'asc',

        },
        {
          label: 'Country',
          field: 'Country',
          sort: 'asc',

        },
        {
          label: 'Confirmed',
          field: 'Confirmed',
          sort: 'asc',
        },
        {
          label: 'Recovered',
          field: 'Recovered',
          sort: 'asc',
        },
        {
          label: 'Deaths',
          field: 'Deaths',
          sort: 'asc',
        },
        {
          label: 'Active_Cases',
          field: 'Active_Cases',
          sort: 'asc',
        },
        {
          label: 'Serious_Critical',
          field: 'Serious_Critical',
          sort: 'asc',
        }
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
          <MDBTableHead columns={table_data.columns} />
          <MDBTableBody rows={table_data.rows} />
        </MDBDataTable>
          />
          
      </Col>
    </Row> 
  </Container>
  );
}

export default TabelGlobal;