
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getActs, addAct } from '../actactions';

import ActsForm from './actsform';
import ActsList from './actslist';
import ContactForm from '../contacts/contactsform';
import ContactsList from '../contacts/contactslist';
//import ActsNav from '../nav/nav'

class App extends Component {

  componentDidMount() {
    this.props.getActs()
  }

  render() {
    return (
      <div className="App">
        <ActsForm 
          acts={this.props.acts}
          addAct={this.props.addAct} 
        />
        <ActsList acts={this.props.acts} />
      </div>
    );
  }
}

/*componentDidMount() {
  this.props.getContacts()
}

render() {
  return (
    <div className="App">
      <ContactForm 
        contacts={this.props.contacts}
        addContact={this.props.addContact} 
      />
      <ContactsList contacts={this.props.contacts} />
    </div>
  );
}
*/

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getActs: () => dispatch(getActs()),
    addAct: actInfo => dispatch(addAct(actInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);