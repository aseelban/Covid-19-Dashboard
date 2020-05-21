import React, { Component,Fragment } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import GlobalCases from './GlobalCases'
import axios from 'axios'
import './Covid.css'
import TabelGlobal from './TabelGlobal'
import Chart from './Chart'
import { MDBCol, MDBRow, MDBContainer} from 'mdbreact';
import Gender from './Gender'
import Age from './Age'



const base_api_url = `https://covid19api.io/api/v1/`;

const log = console.log;





class Covid extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            global_cases : [],
            global_active_cases : [],
            global_closed_cases : [],
            global_cases_all_contries : [],
            global_all_cases_date : [],
            age_data: [],
            gender_data: [],
            news: [],
            isLoaded: true,
        }

    }

    //! Get total cases globaly.
    current_global_cases = async () =>{
        
        try {
            const url = `${base_api_url}AllReports`;
            let res = await axios.get(url);
            const data = res.data.reports;

            this.setState({
                global_cases: {total_cases: data[0].cases, total_recovered: data[0].recovered, total_deaths: data[0].deaths},
                global_active_cases: data[0].active_cases[0],
                global_closed_cases: data[0].closed_cases[0],
                global_cases_all_contries: data[0].table[0]
            })

        } catch(error){
            log(error)
        }

    }

    //! Remove unwanted items from state
    remove_item_from_state = (e) => {

        this.setState({
            global_cases_all_contries: this.state.global_cases_all_contries.filter(item => item.Country != e)
        })

    }



//     //! Get the global cases in per country
//     current_all_global_cases = async () => {
//         const url = `${base_api_url}summary`;
//         let res = await axios.get(url);
//         const data = res.data.Countries;
//         try{
//             this.setState({global_all_cases: data})  
//         } catch(err){
//             log(err)
//         }

//     } 

//     //! Get Get the global cases in per country by date
    current_all_global_cases_date = async () => {
        const url = 'https://covidapi.info/api/v1/global/count';
        let req = await axios.get(url)
        let res = req.data.result
        this.setState({
            global_all_cases_date: res,
        })
        
    }




//     //! change the legend text color
    renderColorfulLegendText(value, entry) {
        const { color } = entry;
      
      return <span style={{ color:'#d7d7d7' }}>{value}</span>;
    }


    //! Get Fatality Rate By Age
    get_current_fatality_data = async () => {

        try {
            
            const req = await axios.all([
                axios.get(`${base_api_url}FatalityRateByComorbidities`),
                axios.get(`${base_api_url}FatalityRateByAge`),

            ])

            this.setState({
                gender_data: req[0].data.table,
                age_data: req[1].data.table
            })


        } catch (error) {
            log(error)
        }



    }





    async componentDidMount(){

        await this.current_global_cases()

        await this.remove_item_from_state('World')

        await this.get_current_fatality_data()

        await this.current_all_global_cases_date()

        this.setState({isLoaded: false})
        
    }



    render() { 
        const {global_cases,global_active_cases , global_closed_cases , global_cases_all_contries, global_all_cases, global_all_cases_date, gender_data, age_data} = this.state;

        return ( 
            <div>
                <Header />
                {this.state.isLoaded ? (
                <div className="spinner-icon spinner-border text-info" role="status">
                    <span className="spinner-text sr-only">Loading...</span>
                </div>)
                : (
                <Fragment>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol sm="12">
                <div className="tabel-title"><i class="fas fa-globe i-global" aria-hidden="true"></i>World COVID-19 Stats</div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                    <GlobalCases cases={global_cases.total_cases} recovered={global_cases.total_recovered} deaths={global_cases.total_deaths} active_cases={global_active_cases} closed_cases={global_closed_cases}/>
                    <TabelGlobal s_data={global_cases_all_contries} />
                    {/* <Chart data={global_all_cases_date} changeLengend={this.renderColorfulLegendText}/> */}
                    <Gender gender_data={gender_data}/>
                    <Age data={age_data}/>
                </Fragment>
                )
            }
            <Footer />
                
            </div>
        );
    }
}

export default Covid;