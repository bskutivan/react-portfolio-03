import React from 'react';
import './style.css';
import gitHub from '../../assets/icons/github.png'
import linkedIn from '../../assets/icons/linkedin1.png'
import stackOverFlow from '../../assets/icons/stackoverflow1.png' 

const Footer = () => (
    <>
  <div className="footer">
    <a href="https://github.com/bskutivan" target="_blank" rel="noopener noreferrer">
        <img alt="Github" className="footer-img" src={gitHub} />
    </a> 

    <a href="https://www.linkedin.com/in/brandon-kutivan/" target="_blank" rel="noopener noreferrer">
        <img alt="LinkedIn" className="footer-img" src={linkedIn} />
    </a> 

    <a href="https://stackoverflow.com/users/12876711/brandonk" target="_blank" rel="noopener noreferrer">
        <img alt="Stack Overflow" className="footer-img" src={stackOverFlow} />
    </a> 
  </div>
  </>
);

export default Footer;