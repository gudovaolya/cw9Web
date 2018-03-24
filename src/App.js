import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Contacts from "./containers/Contacts/Contacts";
import AddContact from "./containers/ContactForms/AddContact";
import EditContact from "./containers/ContactForms/EditContact";

class App extends Component {
  render() {
    return (
      <Fragment>

        <Switch>
          <Route path="/" exact component={Contacts}/>
          <Route path="/add_contact" exact component={AddContact}/>
          <Route path="/edit_contact" exact component={EditContact}/>
          <Route render={() => <h1>404 page not found</h1>}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
