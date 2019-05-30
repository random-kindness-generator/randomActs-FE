import React from 'react';

const Contacts = props => {
    return(
        <div className='contacts'>
            <h2>{props.contacts.name}</h2>
            <p>{props.contacts.phone}</p>
            <p>{props.contacts.email}</p>
            <p>{props.contacts.address}</p>
            <p>{props.contacts.group}</p>
            <p>{props.contacts.notes}</p>
        </div>
    )
}

export default Contacts;

/* 
"name": "admin2", 
	 "phone": "1234567890",
     "email": "test@email.com",
     "adress": "123 street",
     "group": "friends",
     "notes": "likes beach stuff",
     "user_id": 1

*/