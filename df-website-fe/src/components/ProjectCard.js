import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol } from 'mdbreact';
import React from 'react'
import '../css/projectcard.css';

var style = {
    maxHeight: "18rem",
    maxWidth: "18rem",
    minWidth:"15rem",
    minHeight: "16rem",
}
export default function ProjectCard(props) {
    return (
            <MDBCard style={style}>
            <MDBCardImage className="img-fluid" src={props.link}/>
            <MDBCardBody>
                <MDBCardTitle>{props.title}</MDBCardTitle>
                <MDBCardText>
                    {props.description}
                </MDBCardText>
            </MDBCardBody>
            </MDBCard>
    )
}
