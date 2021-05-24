import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol } from 'mdbreact';
import React from 'react'
import '../css/projectcard.css';


export default function ProjectCard(props) {
    return (
        <MDBCol style={{maxWidth: "22rem"}}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"/>
            <MDBCardBody>
                <MDBCardTitle>{props.title}</MDBCardTitle>
                <MDBCardText>
                    {props.description}
                </MDBCardText>
            </MDBCardBody>
            </MDBCard>
        </MDBCol>
    // <Card className="card">
    //     <Card.Body>
    //         <Card.Title>{props.title}</Card.Title>
    //         <Card.Subtitle className="mb-2 text-muted">{props.techstack}</Card.Subtitle>
    //         <Card.Text>
    //             {props.description}
    //   </Card.Text>
    //   <Card.Link href={props.link}>{props.link}</Card.Link>
    //   </Card.Body>
    //   </Card>
    )
}
