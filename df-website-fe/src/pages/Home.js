import React from 'react'
import Header from '../components/Header'
import HomeView from '../components/HomeView';
import { MDBIcon } from "mdbreact";
import '../css/home.css';

export default function Home() {
    return (
        <div className="background">
            <Header color="bg-primary"/>
            <h1>
            <HomeView text="Daniel Facundo"/>
            </h1>
            <p className='info-text'>
                Aspiring Software Engineer
            </p>
            <div className="home-icons">
            <a href="https://www.linkedin.com/in/danielfacundo/" target="_blank" rel="noreferrer" className="a-icons">
            <MDBIcon size="3x" fab icon="linkedin"/>
            </a>
            <a href="https://github.com/DanielFacundo" target="_blank" rel="noreferrer" className="a-icons">
            <MDBIcon size="3x" className="home-icons" fab icon="github" />
            </a>
            </div>
        </div>
    )
}
