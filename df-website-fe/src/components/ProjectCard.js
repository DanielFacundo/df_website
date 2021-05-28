import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol,MDBIcon } from 'mdbreact';
import React from 'react'
import '../css/projectcard.css';
export default function ProjectCard(props) {
    
var style = {
    minHeight: "22rem",
    minWidth: "20rem",
    maxHeight: "22rem",
    maxWidth: "20rem",
}
const renderGithub = () => {
    if (typeof props.github == 'string') {
        return (
        <li className='list-inline-item pr-2'>
        <a href={props.github} target="_blank" className='white-text'>
            <MDBIcon fab icon='github' className='mr-1' />
            Github
        </a>
      </li>)
    } else {
        return (<li className='list-inline-item pr-2'>N/A</li>)
    }
}
    return (
        <MDBCol className='card-column' lg='4'>
            <MDBCard style={style}>
            <MDBCardImage className="img-fluid" src={props.link}/>
            <MDBCardBody className=''>
                <MDBCardTitle className='h6 font-weight-bold' >{props.title}</MDBCardTitle>
                <MDBCardText>
                    {props.description}
                </MDBCardText>
            </MDBCardBody>
            <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
              <ul className='list-unstyled list-inline font-small'>
                  <li className='list-inline-item pr-2 white-text'>Tech Stack: {props.techstack}</li>
                  {renderGithub()}
                </ul>
            </div>
            </MDBCard>  
        </MDBCol>
    )
}
