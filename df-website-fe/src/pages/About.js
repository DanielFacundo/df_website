import React from 'react'
import Header from '../components/Header';
import '../css/about.css'
import Image from 'react-bootstrap/Image';
import '../assets/emma.jpg';
export default function About() {
    return (
        <div>
            <Header/>
            <Image className="image" src="https://media.vanityfair.com/photos/565cd19cc4bc3b13591a80a5/master/w_2560%2Cc_limit/emma-watson-feeling-awesome.jpg/" roundedCircle/>
            <p className="about-text">In west Philadelphia born and raised
On the playground was where I spent most of my days
Chillin' out maxin' relaxin' all cool
And all shootin some b-ball outside of the school
When a couple of guys who were up to no good
Started making trouble in my neighborhood
I got in one little fight and my mom got scared
She said 'You're movin' with your auntie and uncle in Bel Air'</p>
        </div>
    )
}
