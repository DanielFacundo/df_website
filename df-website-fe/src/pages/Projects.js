import React from 'react'
import { CardDeck } from 'react-bootstrap';
import Header from '../components/Header';
import Card from '../components/ProjectCard';
import '../css/projects.css'

export default function Projects() {

    const projects = [
        {
            title: "project 1",
            techstack: "Java",
            description: "explanationexplanationexplanationexplanationexplanationexplanation 1",
            link: "www.github.com"
        },
        {
            title: "project 2",
            techstack: "Javascript",
            description: "explanationexplanationexplanationexplanationexplanationexplanation 2",
            link: "www.github.com"
        },
        {
            title: "project 3",
            techstack: "C++",
            description: "explanationexplanationexplanationexplanationexplanationexplanation 3",
            link: "www.github.com"
        },
        {
            title: "project 4",
            techstack: "C++",
            description: "explanationexplanationexplanationexplanationexplanationexplanation 4",
            link: "www.github.com"
        }
    ]
    return (
        <div>
            <Header/>
            <CardDeck className="card-layout">

            {projects.map((card) => 
                        <Card title={card.title} techstack={card.techstack} description={card.description} link={card.link}>
                        </Card>
            )}
            </CardDeck>
        </div>
    )
}
