import React from 'react';
import './style.css';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, Button, Popover, PopoverBody
//   } from 'reactstrap';

function ProjectCard(props) {

    return (
        // <div>
        //     <Card>
        //         <CardImg top width="100%" src={props.image} alt={props.name} />
        //         <CardBody>
        //             <CardTitle>{props.name}</CardTitle>
        //             <CardText>{props.github}</CardText>
        //             <Button href={props.deployedapp}>Visit App</Button>
        //         </CardBody>
        //     </Card>
        // </div>

        <div className="card">
          <div className="img-container">
            <img alt={props.name} src={props.image} />
          </div>
          <div className="title-container">
            <a href={props.deployedapp}>{props.name}</a>
          </div>
          <a className= "project-github" href={props.github}>Project Github</a>
          <div className="about-container"> 
            <p className="project-about" href={props.description}>{props.description}</p>
            <div>
            <p className="project-tech" href={props.technologies}>Tech used: {props.technologies}</p>
            </div>
          </div>
        </div>
    )
}

export default ProjectCard