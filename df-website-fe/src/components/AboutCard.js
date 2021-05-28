import React from 'react'
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import '../css/aboutcard.css'
import image from '../assets/aboutpic.jpg'
export default function AboutCard() {
    var cardStyle = {
        minWidth: '35rem',
        maxHeight:'45rem',
        maxWidth:'30rem',
    }

    var imageStyle = {
    }
    return (
        <MDBCol className="about-card" md='4'>
        <MDBCard style={cardStyle} >
          <MDBCardImage
            hover
            className='card-img-top'
            src={image}
            alt='about picture'
            style={imageStyle}
          />

          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle className='card-title'>
              <strong>Daniel Facundo</strong>
            </MDBCardTitle>

            <p className='font-weight-bold blue-text'>Software Engineer</p>

            <MDBCardText>
            I am a recent graduate from Northern Illinois University with a Bachelor of Science in Computer Science. While I was getting my college education, I was also involved in an internship plus many university organizations that taught me skills that will help me become a successful software engineer.{' '}
            </MDBCardText>

            <MDBCol md='12' className='d-flex justify-content-center'>
              <MDBBtn rounded floating color='fb'>
                <MDBIcon size='lg' fab icon='linkedin'></MDBIcon>
              </MDBBtn>

              <MDBBtn rounded floating color='tw'>
                <MDBIcon size='lg' fab icon='twitter'></MDBIcon>
              </MDBBtn>
            </MDBCol>
          </MDBCardBody>
          <div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
              <ul className='list-unstyled list-inline font-small'>
                  <li className='list-inline-item pr-2 white-text'>Languages: Java/Javascript/C++</li>
                  <li className='list-inline-item pr-2'>Frameworks: React/Node</li>
              </ul>
          </div>
        </MDBCard>
      </MDBCol>
    )
}
