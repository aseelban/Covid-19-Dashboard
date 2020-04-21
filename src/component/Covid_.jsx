import React, { Component,Fragment } from 'react'
import Header from './layout/Header'
import GlobalCases from './GlobalCases'
import {countryObject} from './Countries'
// import {countryObject} from './Countries'
import axios from 'axios'
import './Covid.css'
import {MDBContainer,MDBRow,MDBCol} from 'mdbreact';


const base_api_url = `https://covidapi.info/api/v1/`;
const log = console.log;

//https://covidapi.info/api/v1/global/latest : global cases per country

class Covid extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            global_cases : [{}],
            global_all_cases : [{}],
         }
         this.toDicmal = this.toDicmal.bind(this)

    }

    //! Get total cases globaly.
     current_global_cases = async () =>{
        const url = `${base_api_url}global`;
        let res = await axios.get(url);
        
        // log(res)
        // log(res.data.date)
        // log(res.data.result)
        try {

            this.setState({
                global_cases: [
                     {
                        date: res.data.date,
                        confirmed: res.data.result.confirmed,
                        deaths: res.data.result.deaths,
                        recovered: res.data.result.recovered
                    }
                ]
    
            })
        } catch(error){
            log(error)
        }

    }

    //! Get the global cases in per country
    current_all_global_cases = async () => {
        const url = `${base_api_url}global/latest`;
        let res = await axios.get(url);
        log(this.state.global_cases)

        try{
            const getData = res.data.result;
            getData.map((e) => {
                const _country = e
                this.setState(st => ({
                    global_all_cases: [
                        ...st.global_all_cases, {_country}
                    ]
                }))
            })

        } catch(err){
            log(err)
        }

    } 









    //* convert numbers to dicmal

    toDicmal(num) {
        
        return num.toLocaleString()

    }


    async componentDidMount(){
        //* call current_global_cases
        this.current_global_cases()
        //* call current_all_global_cases
        this.current_all_global_cases()

        let toObj = JSON.stringify(this.state.global_all_cases)

        // log(toObj)
        // for(let el in toObj){
        //     log(el)
        // }
        toObj.map((e) => {
            log(e)
        })
        
    }


    getKeyCountry () {
        log(countryObject)
    }


    render() { 
        const {global_cases} = this.state;
        return ( 
            <div>
                <Header />
                {/* <button onClick={this.getKeyCountry}>click</button> */}
                <Fragment>
                    <GlobalCases confirmed={global_cases[0].confirmed} deaths={global_cases[0].deaths} recovered={global_cases[0].recovered} date={global_cases[0].date} toDicmal={this.toDicmal}/>
                </Fragment>
            </div>
         );
    }
}
 
export default Covid;