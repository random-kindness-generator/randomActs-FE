import React, { Component } from 'react';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newContact: {
                name: '',
                phone: '',
                email: '',
                address: '',
                group: '',
                notes: '',
            }
        }
    }

    handleChange = e => {
        this.setState({
            newContact: {
                ...this.state.newContact,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.newContact.name === ''){
            alert('Enter name')
        } else if (this.state.newContact.phone === ''){
            alert('Enter a phone number')
        } else if (this.state.newContact.email === ''){
            alert('Enter an email address or put n/a if unknown')
        } else if (this.state.newContact.address === ''){
            alert('Enter an address or put n/a if unknown')
        }else if (this.state.newContact.group === ''){
            alert('Enter a group')
        }else if (this.state.newContact.notes === ''){
            alert('Enter any notes needed')
        }else {
            this.props.addContact(this.state.newContact)
            this.setState({
                newContact: {
                    name: '',
                    phone: '',
                    email: '',
                    address: '',
                    group: '',
                    notes: '',
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
                    placeholder='Contact Name'
                    value={this.state.newContact.name}
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='phone'
                    placeholder='Contact Number'
                    value={this.state.newContact.phone}
                    onChange={this.handleChange}
                />
                <input 
                    type='text'
                    name='email'
                    placeholder='Email Address'
                    value={this.state.newContact.email}
                    onChange={this.handleChange}
                />
                 <input 
                    type='text'
                    name='address'
                    placeholder='Address'
                    value={this.state.newContact.address}
                    onChange={this.handleChange}
                />
                 <input 
                    type='text'
                    name='group'
                    placeholder='Group name. EX: Family, Friend etc...'
                    value={this.state.newContact.group}
                    onChange={this.handleChange}
                />
                 <input 
                    type='text'
                    name='notes'
                    placeholder='Notes such as favorite color etc...'
                    value={this.state.newContact.notes}
                    onChange={this.handleChange}
                />
                <button type='submit' value='Add Contact'>Add Contact</button>
            </form>
        )
    }
}

export default ContactForm;