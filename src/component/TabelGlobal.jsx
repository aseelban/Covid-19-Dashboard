import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container,Col, Card,CardBody, Row, DataTable} from "mdbreact";
import './TabelGlobal.css'

const TabelGlobal = (props) => {

  
  
  const {g_data} = props;
  // for(var i = 1; i < g_data.length; i++){
  //   console.log(i)
  // }
  
  let e;


    var func = g_data.map((e,i) => {
      return ({
        id: i,
        Country: e.Country,
        NewConfirmed: e.NewConfirmed,
        TotalConfirmed: e.TotalConfirmed,
        NewRecovered: e.NewRecovered,
        TotalRecovered: e.TotalRecovered,
        NewDeaths: e.NewDeaths,
        TotalDeaths: e.TotalDeaths,
      })
    })

  


  

  const data = {
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
        label: 'New Confirmed',
        field: 'NewConfirmed',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Total Confirmed',
        field: 'TotalConfirmed',
        sort: 'asc',
        width: 270
      },
      {
        label: 'New recovered',
        field: 'NewRecovered',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Total recovered',
        field: 'TotalRecovered',
        sort: 'asc',
        width: 200
      },
      {
        label: 'New Deaths',
        field: 'NewDeaths',
        sort: 'asc',
        width: 100
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
      <Col className="c_heading" sm="12">
        <h1 className="text-white heading-global"><i class="fas fa-globe i-global"></i> World COVID-19 Stats</h1>
      </Col>
     <Row className="py-3">
      <Col md="12">
          <MDBDataTable
            striped
            bordered
            hover
            data={data}
          />
      </Col>
    </Row> 
    {/* <ul>
      {g_data.map((e) => {
        return <li>{e.Country}</li>
      })}
    </ul> */}
  </Container>
  );
}

export default TabelGlobal;