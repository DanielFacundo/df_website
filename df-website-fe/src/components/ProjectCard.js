import React from 'react'
import Card from 'react-bootstrap/Card';



export default function ProjectCard(props) {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.techstack}</Card.Subtitle>
            <Card.Text>
                {props.description}
      </Card.Text>
      <Card.Link href={props.link}>{props.link}</Card.Link>
      </Card.Body>
      </Card>
    )
}
