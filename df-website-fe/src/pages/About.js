import React from 'react'
import Header from '../components/Header';
import AboutCard from '../components/AboutCard';
import '../css/about.css'

export default function About() {
    return (
        <div className="about-background">
            <Header/>
            <AboutCard className="aboutcard"/>
        </div>
    )
}
