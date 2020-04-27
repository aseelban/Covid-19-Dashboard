import React from 'react';
import { MDBDataTable } from 'mdbreact';
import { Container,Col, Row, MDBTableBody, MDBTableHead} from "mdbreact";
import './TabelGlobal.css'


const TabelGlobal = (props) => {

  const {globalData} = props;

  //* sort global state data
    globalData.sort((a,b) => {
      if(a.TotalConfirmed < b.TotalConfirmed){
        return 1
      }else {
        return -1
      }
    })

    let get_data = globalData.map((e,i) => {
      return ({
        id: i+1,
        Country: e.Country,
        NewConfirmed: e.NewConfirmed,
        TotalConfirmed: e.TotalConfirmed,
        NewRecovered: e.NewRecovered,
        TotalRecovered: e.TotalRecovered,
        NewDeaths: e.NewDeaths,
        TotalDeaths: e.TotalDeaths
        
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
        },
        {
          label: 'New Confirmed',
          field: 'NewConfirmed',
          sort: 'asc',
        },
        {
          label: 'Total Confirmed',
          field: 'TotalConfirmed',
          sort: 'asc',
        },
        {
          label: 'New recovered',
          field: 'NewRecovered',
          sort: 'asc',
        },
        {
          label: 'Total recovered',
          field: 'TotalRecovered',
          sort: 'asc',
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
        }
      ],
    rows: get_data
    };

  return (
    <Container className="mt-3">
      <div className="tabel-title"><i class="fas fa-globe i-global" aria-hidden="true"></i>
      World COVID-19 Stats</div>
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