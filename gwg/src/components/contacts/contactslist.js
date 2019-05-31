import React from 'react';

import Contacts from './contacts.js';


const ContactsList = props => {
    return(
        <div className='contacts-container'>
            <h1>Your Contacts</h1>
            <div className='contacts-list'>
            {props.contacts.map((s, i) => <Contacts contact={s} key={i}/>)}
            </div>
        </div>
    )
}

export default ContactsList; 