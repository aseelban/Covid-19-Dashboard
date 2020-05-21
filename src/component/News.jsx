import React, { Component, Fragment } from 'react'
import Header from './layout/Header'
import Footer from './layout/Footer'
import axios from 'axios'
import { MDBCard,MDBCol, MDBCardBody, MDBContainer, MDBRow, MDBCardImage, MDBCardTitle, MDBCardText, MDBIcon } from "mdbreact";
import './News.css'

const log = console.log;


class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            news: [],
            items: 10,
            isLoaded: true
         }
    }


    //
    // ! get lastest news from API
    //
    getNews = async () => {
        
        try {
            let url = `http://newsapi.org/v2/everything?q=Covid&from=2020-05-06&sortBy=popularity&apiKey=fa9601f1b1894156bee8904f361189cd`
            let req = await axios.get(url)
            let res = req.data.articles;
    
            this.setState({
                news: res,
                isLoaded: false
            })

        } catch (error) {
            log(error)
            
        }
    }


    componentDidMount(){
        this.getNews()
    }

    render() { 
        const {news} = this.state;
        const data = news.map((e) => {
        return <MDBCol sm="12" md="4" className="m-2" style={{ maxWidth: "22rem" }}>
        <MDBCard className="news-card">
            <MDBCardImage className="img-fluid" src={e.urlToImage}
            waves />
            <MDBCardBody>
        <MDBCardTitle>{e.title}</MDBCardTitle>
        <MDBCardText>{e.description}</MDBCardText>
        <a href={e.url} target="_blank" className='black-text d-flex justify-content-end'>
            <h5 className='white-text'>
            Read more
            <MDBIcon icon='angle-double-right' className='ml-2' />
            </h5>
            </a>
        <p className="news-date">{e.publishedAt}</p>
            </MDBCardBody>
        </MDBCard>
        </MDBCol>
        })



        return ( <div>
            <Header />
            {this.state.isLoaded ? (
            <div className="spinner-icon spinner-border text-info" role="status">
                <span className="sr-only"></span>
            </div>) 
            : 
            (
            <Fragment>
                <MDBContainer>
                    <MDBRow className="d-flex justify-content-center">
                        <MDBCol sm="12">
                        <div className="tabel-title m-4"><i class="fas fa-newspaper"></i>Latest news on coronavirus disease</div>
                        </MDBCol>
                        {data}
                        {console.log(this.state.news)}
                        {console.log(this.state.news.length)}
                    </MDBRow>
                </MDBContainer>
            </Fragment>
            
            )}
            <Footer />
        </div> );
    }
}

export default News;