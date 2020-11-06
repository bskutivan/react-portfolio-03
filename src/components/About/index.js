import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './style.css';
import devImage from '../../assets/cover/IMG-5514.JPG'

function About() {
    return(
        <Container className="container">
            <Row className="about">
                <Col xs="3" className="aboutTitle">
                <h1>About Me</h1>
                </Col>
                <Col xs="6" className="aboutText">
                <p>
                I am a coding bootcamp graduate with a passion for learning new technologies and solving new problems.
                <br />
                I pursued studying History and ancient languages during my time at UCSC and have been spending the last 8 months learning as many new coding languages as I can.
                <br />
                I am based in central California and am an avid gardener and cultivator of curious campanula and feathery ferns.
                </p>
                </Col>
                <Col className="imgCont" xs="3">
                    <img className="aboutImg" src={devImage} alt="Brandon Kutivan holding flowers" />
                </Col>
            </Row>
        </Container>
    )
}

export default About;