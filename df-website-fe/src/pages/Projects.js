import { MDBRow } from 'mdbreact';
import React from 'react'
import Header from '../components/Header';
import Card from '../components/ProjectCard';
import '../css/projects.css'

export default function Projects() {

    const projects = [
        {
            title: "Personal Website",
            techstack: "React,MDBootstrap",
            description: "Personal website to display skills, projects, and provide some background information on who I am.",
            link: "https://i.ibb.co/NZqwND2/Untitled.jpg",
            github: "https://github.com/DanielFacundo/df_website"
        },
        {
            title: "Spotify World Mood Visualizer ",
            techstack: "React,Node",
            description: "Using Spotify's API, we visualied a country's mood based on what they were listening too during the pandemic.",
            link: "https://i.ibb.co/tD9DzGh/React-Node.png",
            github: false,
        },
        {
            title: "Event Tracker",
            techstack: "React,Node,MySQL",
            description: "Application that helps users and admins keep track of a companies events (logins, website hits, etc.). ",
            link: "https://i.ibb.co/tD9DzGh/React-Node.png",
            github: false,
        },
        {
            title: "Virtual Reality Social Media Viewer",
            techstack: "C#,Node,Unity,AutoCAD",
            description: "Virtual reality application that diplays a company's social media in virtual reality using an Oculus Rift. ",
            link: "https://i.ibb.co/prjhrgS/CUnity.png",
            github: false,
        }
    ]
    return (
        <div className="background">
            <Header/>
            <MDBRow className="card-layout">
            {projects.map((card) => 
            <Card title={card.title} techstack={card.techstack} description={card.description} link={card.link} github={card.github}></Card>
            )}
            </MDBRow>

        </div>
    )
}
