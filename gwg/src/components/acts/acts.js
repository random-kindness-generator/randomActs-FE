import React from 'react';

const Acts = props => {
    return(
        <div className='acts'>
            <h2>{props.acts.name}</h2>
        </div>
    )
}

export default Acts;

/* 
"name": "admin2", 
	 "phone": "1234567890",
     "email": "test@email.com",
     "adress": "123 street",
     "group": "friends",
     "notes": "likes beach stuff",
     "user_id": 1

*/