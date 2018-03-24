import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import './ContactForms.css';
import withLoader from "../../hoc/withLoader/withLoader";

class AddContact extends Component {

    state = {
        contact: {
            username: '',
            phone: '',
            email: '',
            photo: ''
        },
        loading: false
    };

    changeContactHandler = (event) => {
        const contactNew = {...this.state.contact};
        const key = event.target.name;
        contactNew[key] = event.target.value;
        this.setState({contact: contactNew});
    };

    addContactHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        axios.post('/contacts.json', this.state.contact).then(response => {
            this.setState({loading: false});
        }).finally(() => {
            this.props.history.push('/');
        });
    };

    render () {
        let photoPreview = null;

        if (this.state.contact.photo !== '') {
            photoPreview = (
                <img src={this.state.contact.photo} alt="" />
            );
        }


        return (
            <div className="container content">
                <div className="form-block">
                    <h3>Add new contact</h3>
                    <form>
                        <div className="form-row">
                            <input
                                className="field"
                                type="text"
                                name="username"
                                placeholder="Enter your name"
                                onChange={this.changeContactHandler}
                                value={this.state.contact.username}
                            />
                        </div>
                        <div className="form-row">
                            <input
                                className="field"
                                type="text"
                                name="phone"
                                placeholder="Enter your phone"
                                onChange={this.changeContactHandler}
                                value={this.state.contact.phone}
                            />
                        </div>
                        <div className="form-row">
                            <input
                                className="field"
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                onChange={this.changeContactHandler}
                                value={this.state.contact.email}
                            />
                        </div>
                        <div className="form-row">
                            <input
                                className="field"
                                type="text"
                                name="photo"
                                placeholder="Enter your photo"
                                onChange={this.changeContactHandler}
                                value={this.state.contact.photo}
                            />
                        </div>
                        <div className="form-row">
                            <span>
                                {photoPreview}
                            </span>
                        </div>
                        <div className="form-row-btn">
                            <button className="form-btn" onClick={this.addContactHandler}>Save</button>
                            <NavLink className="form-btn" to="/" exact>Back to contacts</NavLink>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withLoader(AddContact, axios);