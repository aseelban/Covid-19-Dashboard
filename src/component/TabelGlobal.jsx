import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container,Col, Row, MDBTableBody, MDBTableHead} from "mdbreact";
import './TabelGlobal.css'


const TabelGlobal = (props) => {

  const {data} = props;

 // for(var i = 1; i < data.length; i++){
  //   console.log(i)
  // }
  
  let e;


    var func = data.map((e,i) => {
      return ({
        id: i,
        Country: e.Country,
        TotalConfirmed: e.TotalCases,
        TotalRecovered: e.TotalRecovered,
        TotalDeaths: e.TotalDeaths,
      })
    })

  


  

  const table_data = {
    columns: [
      {
        label: '#',
        field: 'id',
        sort: 'asc'
      },
      {
        label: 'Countries',
        field: 'Country',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Total Confirmed',
        field: 'TotalConfirmed',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Total recovered',
        field: 'TotalRecovered',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Total Deaths',
        field: 'TotalDeaths',
        sort: 'asc',
        width: 100
      },
    ],
    rows: func
  };

  return (
    <Container className="mt-3">
     <Row className="py-3">
      <Col md="12">
          <MDBDataTable
            striped
            bordered
            hover
            data={table_data}
          />
      </Col>
    </Row> 
    {/* <ul>
      {data.map((e) => {
        return <li>{e.Country}</li>
      })}
    </ul> */}
  </Container>
  );
}

export default TabelGlobal;