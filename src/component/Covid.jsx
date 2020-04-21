import React, { Component,Fragment } from 'react'
import Header from './layout/Header'
import GlobalCases from './GlobalCases'
import {countryObject} from './Countries'
// import {countryObject} from './Countries'
import axios from 'axios'
import './Covid.css'
import {MDBContainer,MDBRow,MDBCol} from 'mdbreact';
import TabelGlobal from './TabelGlobal'


const base_api_url = `https://api.covid19api.com/`;
const log = console.log;



class Covid extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            global_cases : [],
            global_all_cases : [],
         }

    }

    //! Get total cases globaly.
    current_global_cases = async () =>{
        const url = `${base_api_url}summary`;
        let res = await axios.get(url);
        const data = res.data.Global;

        try {

            this.setState({
                global_cases: data
            })

        } catch(error){
            log(error)
        }

    }


    //! Get the global cases in per country
    current_all_global_cases = async () => {
        const url = `${base_api_url}summary`;
        let res = await axios.get(url);
        const data = res.data.Countries;
        const elm = data.shift()
        console.log(elm)

        try{
            this.setState({
                global_all_cases: data
            })

        } catch(err){
            log(err)
        }

    } 

    rmCountry = () => {
        let filteredArray = this.state.global_all_cases.filter(item => item.length === 0)
        this.setState({global_all_cases: filteredArray});
    }







    async componentDidMount(){
        //* call current_global_cases
        this.current_global_cases()
        //* call current_all_global_cases
        this.current_all_global_cases()
        //* remove junk
        this.rmCountry()

        

        
    }



    render() { 
    
 
        const {global_cases,global_all_cases} = this.state;

        return ( 
            <div>
                <Header />
                <Fragment>
                <GlobalCases n_confirmed={global_cases.NewConfirmed} t_confirmed={global_cases.TotalConfirmed} n_deaths={global_cases.NewDeaths} t_deaths={global_cases.TotalDeaths} n_recovered={global_cases.NewRecovered} t_recovered={global_cases.TotalRecovered}/>
                </Fragment>
                <TabelGlobal g_data={global_all_cases}/>

            </div>
         );
    }
}
 
export default Covid;