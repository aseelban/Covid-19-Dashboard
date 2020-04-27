import React, { Component,Fragment } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import GlobalCases from './GlobalCases'
import axios from 'axios'
import './Covid.css'
import TabelGlobal from './TabelGlobal'
import Chart from './Chart'


const base_api_url = `https://api.covid19api.com/`;
const log = console.log;





class Covid extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            global_cases : [],
            global_all_cases : [],
            chartData: {}
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
        try{
            this.setState({global_all_cases: data})  
        } catch(err){
            log(err)
        }

    } 







    async componentDidMount(){
        //* call current_global_cases
        await this.current_global_cases()
        //* call current_all_global_cases
        await this.current_all_global_cases()
        
    }



    render() { 
        const {global_cases,global_all_cases} = this.state;

        return ( 
            <div>
                <Header />
                <Fragment>
                <GlobalCases n_confirmed={global_cases.NewConfirmed} t_confirmed={global_cases.TotalConfirmed} n_deaths={global_cases.NewDeaths} t_deaths={global_cases.TotalDeaths} n_recovered={global_cases.NewRecovered} t_recovered={global_cases.TotalRecovered}/>
                </Fragment>
                <TabelGlobal globalData={global_all_cases}/>
                <Chart mdata={this.state.global_all_cases}/>
                <Footer />
            </div>
        );
    }
}

export default Covid;