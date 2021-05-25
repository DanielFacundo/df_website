import { MDBCol, MDBRow } from 'mdbreact';
import React from 'react'
import Header from '../components/Header';
import Card from '../components/ProjectCard';
import '../css/projects.css'

export default function Projects() {

    const projects = [
        {
            title: "project 1",
            techstack: "Java",
            description: "explanationexplanationexplanationexplanationexplanationexplanation 1",
            link: "https://cdn.hackernoon.com/hn-images/1*-NOQtyJAGQ1RNC3iVt_thA.png"
        },
        {
            title: "project 2",
            techstack: "Javascript",
            description: "explanationexplanationexplanationexplanationexplanationexplanation 2",
            link: "https://keyholesoftware.com/wp-content/uploads/Spring-Boot-React.png"
        },
        {
            title: "project 3",
            techstack: "C++",
            description: "explanationexplanationexplanationexplanationexplanationexplanation 3",
            link: "https://keyholesoftware.com/wp-content/uploads/Spring-Boot-React.png"
        },
        {
            title: "project 4",
            techstack: "C++",
            description: "explanationexplanationexplanationexplanationexplanationexplanation 4",
            link: "https://cdn.hackernoon.com/hn-images/1*-NOQtyJAGQ1RNC3iVt_thA.png"
        }
    ]
    return (
        <div className="background">
            <Header color="indigo"/>
            <MDBRow className="card-layout">
            {projects.map((card) => 
            <MDBCol sm='4'>
            <Card title={card.title} techstack={card.techstack} description={card.description} link={card.link}></Card>
            </MDBCol>
            )}
            </MDBRow>

        </div>
    )
}
