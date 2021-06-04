import React from 'react'
import Header from '../components/Header'
import HomeView from '../components/HomeView';
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
        </div>
    )
}
