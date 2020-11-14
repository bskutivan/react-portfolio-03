import React from 'react';
import Wrapper from '../Wrapper';
import ProjectCard from '../ProjectCard'
import projects from '../../projects.json';
import { Container, Row } from 'reactstrap';
import './style.css';


function Portfolio() {
    return(
        <Wrapper>
            <Container>
            <Row className="projects-title">
                <h1>Projects:</h1>
            </Row>
            <Row>
            {
                projects.map(project => {
                   return(
                    <ProjectCard 
                        id = {project.id}
                        key = {project.id}
                        name = {project.name}
                        image = {project.image}
                        github = {project.github}
                        deployedapp = {project.deployedapp}
                        description = {project.description}
                        technologies = {project.technologies}
                    />
                   )
                })
            }
            </Row>
            </Container>
        </Wrapper>
    )
}

export default Portfolio;