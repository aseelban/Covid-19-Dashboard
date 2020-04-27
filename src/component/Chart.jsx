import React from "react";
import {Line, Doughnut } from "react-chartjs-2";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './Chart.css'


const Chart = (props) => {
  //* sort global state data
  props.mdata.sort((a, b) => {
    if (a.TotalConfirmed < b.TotalConfirmed) {
      return 1;
    } else {
      return -1;
    }
  });

  //* filter the data to get first ten items from it
  const filter_topFive = props.mdata.slice(0, 5);

  //* get total_confirmed data
  const _confirmed = {
    labels: filter_topFive.map((e) => e.Country),
    datasets: [
      {
        label: "Confirmd",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "#476BD6",
        borderColor: "white",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#273144",
        pointBackgroundColor: "#273144",
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#273144",
        pointHoverBorderColor: "yellow",
        pointHoverBorderWidth: 1,
        pointRadius: 1.5,
        pointHitRadius: 10,
        data: filter_topFive.map((e) => e.TotalConfirmed),
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  //* get total deaths data
  const _deaths = {
    labels: filter_topFive.map((e) => e.Country),
    datasets: [
      {
        fill: true,
        lineTension: 0.1,
        backgroundColor: [
          "#E86F6F",
          "#8CB3DE",
          "#9BED8C",
          "#476BD6",
          "#B8D0EA",
        ],
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: filter_topFive.map((e) => e.TotalDeaths),
      },
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  };

  return (
    <MDBContainer className="chart">
          <div className="title-chart"><i class="fa fa-line-chart" aria-hidden="true"></i>
          Most effected countries:</div>
      <MDBRow>
        <MDBCol className="p-0 d-flex justify-content-center" md="6">
          <Line
            data={_confirmed}
          />
        </MDBCol>
        <MDBCol className="p-0 d-flex justify-content-center" md="6">
          <Doughnut data={_deaths} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Chart;
