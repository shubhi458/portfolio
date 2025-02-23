'use client'
import React, { useRef, useState } from "react";
import { Call, LinkedIn, Mail, Twitter } from '@mui/icons-material';
const ContactPage = () => {
    const myname = useRef(null);
    const email = useRef(null);
    const message = useRef(null);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwO7ajmRChdtmT-PmunW8hAN9M9j07XieUGKwfqu5efptpvy7LWH0-SwdIDsf6-l9v7/exec'

    let formData = new FormData();

    function handleSubmit(e) {
        e.preventDefault();
        formData.append('Name', myname.current.value);
        formData.append('Email', email.current.value);
        formData.append('Message', message.current.value)
        fetch(scriptURL, { method: 'POST', body: formData })
            .then(() => {
                setShowSuccessMessage(true); setTimeout(function () {
                    setShowSuccessMessage(false)
                    document.getElementById("query-form").reset();
                }, 5000);
            })
            .catch(error => console.error('Error!', error.message))
    };

    return <div id="contact">
        <div className="container">
            <div className="row">
                <div className="contact-left">
                    <h1 className="sub-title">Contact Me</h1>
                    <p><Mail className='contact-icons' />saksenashubhi14@gmail.com</p>
                    <p><Call className='contact-icons' />+91 9793526078</p>
                    <div className="social-icons">
                        <a href='https://x.com/Shubhi0496'> <Twitter /></a>
                        <a href='https://www.linkedin.com/in/shubhi-saxena-7a30a5127/'><LinkedIn /></a>
                    </div>
                </div>
                <div className="contact-right">
                    <form id="query-form" onSubmit={handleSubmit}>
                        <input ref={myname} type='text' name='Name' placeholder='Your Name' required />
                        <input ref={email} type='email' name='Email' placeholder='Your Email' required />
                        <textarea ref={message} name='Message' rows={6} placeholder='Your Message'></textarea>
                        <button type='submit' className='btn2' disabled={showSuccessMessage}>Submit</button>
                    </form>
                    {showSuccessMessage ? <span id="msg">Your message is sent!!</span> : null}
                </div>
            </div>
        </div>
    </div>
}

export default ContactPage;