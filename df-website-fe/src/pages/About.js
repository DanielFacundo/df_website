import React from 'react'
import Header from '../components/Header';
import '../css/about.css'
import '../assets/emma.jpg';
import AboutCard from '../components/AboutCard';
export default function About() {
    return (
        <div className="background">
            <Header/>
            <AboutCard className="aboutcard"/>
        </div>
    )
}
