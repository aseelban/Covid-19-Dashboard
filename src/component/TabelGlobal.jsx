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
        TotalConfirmed: e.TotalCases,
        TotalRecovered: e.TotalRecovered,
        TotalDeaths: e.TotalDeaths,
        Serious_Critical: e.Serious_Critical,
        ActiveCases: e.ActiveCases,
        
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

       //* sort global state data
       data.sort((a,b) => {
        if(a.TotalConfirmed > b.TotalConfirmed){
          return 1
        }else {
          return -1
        }
      })


  return (
    <Container className="mt-3">
     <Row className="py-3">
      <Col md="12">
          <MDBDataTable responsive
           
        striped
        bordered
        hover
        // order={['Confirmed', 'desc' ]}
        sorting={false}

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