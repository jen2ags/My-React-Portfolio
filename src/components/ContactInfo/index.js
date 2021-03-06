import React from 'react';
import ContactForm from '../ContactForm';

function Contact() {
    return (
        <section id="contact-me">
        <h2 className="section-title"> Contact Me</h2>
       
        <ul>
            <ContactForm></ContactForm>
            
            <li>
                Phone Number: <a href="tel:210.912.9164">210.912.9164</a>
            </li>
            <li>
                Email: <a href="mailto:jennjenn93@gmail.com">jennjenn93@gmail.com</a>
            </li>
        </ul>
    </section>
    )
}

export default Contact;