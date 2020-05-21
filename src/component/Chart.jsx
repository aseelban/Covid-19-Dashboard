import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";




const Chart  =  (props) => {
  
  const arrData = [];
  
  Object.entries(props.data).map((type) => {
    arrData.push(type)  
    })
    
    let data = arrData.map((e) => {
      return (
        {year: e[0], confirmed: e[1].confirmed, recovered: e[1].recovered, deaths: e[1].deaths}
        )
      })
      
      
  
    arrData.sort((a, b) => {
      if (a[1].confirmed < b[1].confirmed) {
        return 1;
      } else {
        return -1;
      }
    });

    
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol sm="12">
          <ResponsiveContainer width='100%' aspect={2.0/1.0}>
        <LineChart
        data={data}
        margin={{
            top: 5, right: 30, left: 20, bottom: 5,
            }}
            >
        <CartesianGrid fill="#27314469" strokeDasharray="3 3" />
        <XAxis dataKey="year" stroke="darkgray"/>
        <YAxis  stroke="darkgray"/>
        <Tooltip wrapperStyle={{backgroundColor: '#37474F' }}/> // recharts-default-tooltip | classname
        <Legend  formatter={props.changeLengend} />
        <Line type="monotone" dataKey="confirmed" stroke="#ffbb33" r={2} activeDot={{ r: 4 }} />
        <Line type="monotone" dataKey="recovered" stroke="#00C851" r={2} />
        <Line type="monotone" dataKey="deaths" stroke="#ff4444" r={2} />
    </LineChart>
    </ResponsiveContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
}


export default Chart
