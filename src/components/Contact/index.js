import React from 'react';
// import { validateEmail } from '../../utils/helpers';
import { Container } from 'reactstrap';
import './contact_style.css';

function ContactForm() {

    // const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    // const { name, message} = formState;

    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {

    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         if(!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if(!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }

    //     if (!errorMessage) {
    //         setFormState({...formState, [e.target.name]: e.target.value });
    //     }
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    // }

    return(
        <div>
            <Container class="contactContainer">
                <div class="flex">
                <div class="contactDiv">
                    <h4 class="contactH4">Do you want to build something together? </h4>
                    <p>Feel free to reach me via email at bskutivan@gmail.com!</p>
                </div>
                <div class="contactDiv">
                    <h4 class="contactH4">Want to see what else I've built? </h4>
                    <p>See my github: <a href="https://bit.ly/35rmnHP">Github!</a></p>
                </div>
                </div>
            </Container>
        </div>
        
    
    // <section>
    //   <h1 data-testid="h1tag">Contact me</h1>
    //   <form id="contact-form" onSubmit={handleSubmit}>
    //     <div>
    //         <label htmlFor="name">Name:</label>
    //         <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
    //     </div>
    //     <div>
    //         <label htmlFor="email">Email address:</label>
    //         <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
    //     </div>
    //     <div>
    //         <label htmlFor="message">Message:</label>
    //         <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
    //     </div>
    //     {errorMessage && (
    //         <div>
    //             <p className="error-text">{errorMessage}</p>
    //         </div>
    //     )}
    //     <button data-testid="subbutton" type="submit">Submit</button>
    //   </form>
    // </section>
    )
}

export default ContactForm;