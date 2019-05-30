
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { getActs, addAct } from '../actactions';

import ActsForm from './actsform';
import ActsList from './actslist';



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