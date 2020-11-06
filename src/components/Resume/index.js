import React from 'react';

function Resume() {
    return(
        <section>
            <h1 className="resume-title">Resume</h1>
            <div className="resume-link">
                <a href="https://docs.google.com/document/d/1cl7e0kt1595hbr7V23vOmSdDpnkVAO3FUQWVZKad21k/edit?usp=sharing">View Resume</a>
            </div>
            <div className="resume-main">
                <h3>Proficiencies and Technologies Known</h3>
            </div>
            <div>
                <ul>
                    <li>HTML/CSS/Sass</li>
                    <li>JS/jQuery</li>
                    <li>Bootstrap/Tailwind</li>
                    <li>Handlebars</li>
                    <li>Local Storage/Session Storage/IndexedDB</li>
                    <li>MERN Stack (MongoDB, Express, React, Node.js)</li>
                    <li>MySQL/Sequelize/NoSQL</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>RESTful API and CRUD API management</li>
                    <li>Dry coding practices/Seperation of concerns</li>
                    <li>Progressive Web App development</li>
                    <li>User Authentication and input validation</li>
                </ul>
            </div>
        </section>
       
    )
}

export default Resume;