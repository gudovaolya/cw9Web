import React from 'react';
import { NavLink } from 'react-router-dom';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className="contact">
            <div className="avatar">
                <img src={props.avatar} alt=""/>
            </div>
            <div className="contact-info">
                <h4>{props.username}</h4>
                <p>{props.phone}</p>
                <p>{props.email}</p>
                <div>
                    <button className="btn" onClick={props.delete}>Delete</button>
                    <NavLink className="btn" to="/edit_contact" exact >Edit</NavLink>
                </div>
            </div>
        </div>
    )
};

export default Contact;