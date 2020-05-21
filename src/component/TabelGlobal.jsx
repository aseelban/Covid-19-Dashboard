import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container,Col, Row, MDBTableBody, MDBTableHead} from "mdbreact";
import './TabelGlobal.css'


const TabelGlobal = (props) => {

  const {s_data} = props;

    let get_data = s_data.map((e,i) => {
      return ({
        id: i+1,
        Country: e.Country,
        TotalConfirmed: e.TotalCases,
        TotalRecovered: e.TotalRecovered,
        TotalDeaths: e.TotalDeaths,
        Serious_Critical: e.Serious_Critical,
        ActiveCases: e.ActiveCases,
        
      })
    })


    const data = {
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
          field: 'TotalConfirmed',
          sort: 'asc',
        },
        {
          label: 'Recovered',
          field: 'TotalRecovered',
          sort: 'asc',
        },
        {
          label: 'Deaths',
          field: 'TotalDeaths',
          sort: 'asc',
        },
        {
          label: 'Active Cases',
          field: 'ActiveCases',
          sort: 'asc',
        },
        {
          label: 'Serious Critical',
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
        data={data}>
          <MDBTableHead columns={data.columns} />
          <MDBTableBody rows={data.rows} />
        </MDBDataTable>
          />
          
      </Col>
    </Row> 
  </Container>
  );
}

export default TabelGlobal;