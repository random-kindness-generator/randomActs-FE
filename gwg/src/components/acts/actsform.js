import React, { Component } from 'react';

class ActsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newAct: {
                name: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            newAct: {
                ...this.state.newAct,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.newAct.name === ''){
            alert('Enter Good Will Gesture to add')
        }  else {
            this.props.addAct(this.state.newAct)
            this.setState({
                newAct: {
                    name: ''
                }
            })
        }
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    name='name'
                    placeholder='Good Will Gesture'
                    value={this.state.newAct.name}
                    onChange={this.handleChange}
                />
                
                <button type='submit' value='Add Gesture'>Add Gesture</button>
            </form>
        )
    }
}

export default ActsForm;