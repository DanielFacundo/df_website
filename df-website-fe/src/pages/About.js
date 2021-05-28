import React from 'react'
import Header from '../components/Header';
import AboutCard from '../components/AboutCard';
import '../css/about.css'

export default function About() {
    return (
        <div className="background">
            <Header/>
            <AboutCard className="aboutcard"/>
        </div>
    )
}
