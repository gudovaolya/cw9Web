import React from 'react';
import './Contact.css';

const ContactShort = (props) => {
    return (
        <div className="contact contact-short" onClick={props.clicked}>
            <div className="avatar">
                <img src={props.avatar} alt=""/>
            </div>
            <div className="contact-info">
                {props.username}
            </div>
        </div>
    )
};

export default ContactShort;