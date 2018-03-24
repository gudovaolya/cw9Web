import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

import './Contacts.css';
import {getContacts, showContactInfo} from "../../store/actions/contacts";
import ContactShort from "../../components/Contact/ContactShort";
import withLoader from "../../hoc/withLoader/withLoader";
import Contact from "../../components/Contact/Contact";
import Modal from "../../components/UI/Modal/Modal";

class Contacts extends  Component {

    state= {
        showModal: false
    };

    componentDidMount() {
        this.props.onGetContacts();
    }

    closeModalHandler = () => {
        this.setState({showModal: false});
    };

    currentContactHandler = (contact) => {
        this.props.onShowContactInfo(contact);
        this.setState({showModal: true});
    };

    removeContactHandler = (id) => {
        axios.delete(`contacts/${id}.json`).then(() => {
            this.props.onGetContacts();
            this.setState({showModal: false});
        });
    };

    render () {

        let contactsBlock = null;

        if (this.props.contacts.length > 0) {
            contactsBlock = this.props.contacts.map(contact => {
                return (
                    <ContactShort
                        key={contact.key}
                        avatar={contact.photo}
                        username={contact.username}
                        clicked={() => this.currentContactHandler(contact)}
                    />
                )
            })
        }

        let modal = (
            <Modal
                show = {this.state.showModal}
                closed = {this.closeModalHandler}
            >
                <Contact
                    avatar={this.props.clickedContact.photo}
                    username={this.props.clickedContact.username}
                    phone={this.props.clickedContact.phone}
                    email={this.props.clickedContact.email}
                    delete={() => this.removeContactHandler(this.props.clickedContact.key)}
                />
            </Modal>
        );


        return (
            <div className="container content">
                <div className="contacts-top clearfix">
                    <h1>Contacts</h1>
                    <NavLink className="btn" to="/add_contact" exact >Add new contact</NavLink>
                </div>
                {modal}
                <div className="contacts-block">
                    {contactsBlock}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts_reducer.contacts,
        clickedContact: state.contacts_reducer.clickedContact
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onGetContacts: () => dispatch(getContacts()),
        onShowContactInfo: (contact) => dispatch(showContactInfo(contact))

    }
};

export default withLoader(connect(mapStateToProps, mapDispatchToProps)(Contacts), axios);