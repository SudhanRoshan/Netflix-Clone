import React from 'react'
import "./HomeScreen.css"
import Nav from "../Nav.js"
import Banner from "../Banner.js"
import requests from '../Requests';
import Row from '../Row'

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav></Nav>
            <Banner></Banner>
            
            <Row
            title="Trending Now"  
            fetchUrl={requests.fetchTrending}
            isLargeRow
            ></Row>
            <Row
            title="Top Rated"
            fetchUrl={requests.fetchTopRated}
            isLargeRow
            ></Row>
            <Row
            title="Action Movies & Shows"
            fetchUrl={requests.fetchActionMovies}
            isLargeRow
            ></Row>
            <Row
            title="Arriving"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            ></Row>
            <Row
            title="Comedy Movies & Shows"
            fetchUrl={requests.fetchComedyMovies}
            isLargeRow
            ></Row>
            <Row
            title="Horror Movies & Shows"
            fetchUrl={requests.fetchHorrorMovies}
            isLargeRow
            ></Row>
            <Row
            title="Romance Movies & Shows"
            fetchUrl={requests.fetchRomanceMovies}
            isLargeRow
            ></Row>
            <Row
            title="Documentaries"
            fetchUrl={requests.fetchDocumentaries}
            isLargeRow
            ></Row>
            <h1>Hello World</h1>
        </div>
    )
}

export default HomeScreen
