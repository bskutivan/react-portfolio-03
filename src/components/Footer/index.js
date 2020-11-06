import React from 'react';
import './style.css';

const Footer = () => (
    <>
  <div className="footer">
    <a href="https://github.com/bskutivan" target="_blank" rel="noopener noreferrer">
        <img alt="Github" className="footer-img" src={require("../../assets/icons/github2.png")} />
    </a> 

    <a href="https://www.linkedin.com/in/brandon-kutivan/" target="_blank" rel="noopener noreferrer">
        <img alt="LinkedIn" className="footer-img" src={require("../../assets/icons/linkedin.png")} />
    </a> 

    <a href="https://stackoverflow.com/users/12876711/brandonk" target="_blank" rel="noopener noreferrer">
        <img alt="Stack Overflow" className="footer-img" src={require("../../assets/icons/stackoverflow.png")} />
    </a> 
  </div>
  </>
);

export default Footer;