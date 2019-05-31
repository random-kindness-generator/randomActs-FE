import React from 'react';

import Acts from './acts.js';


const ActsList = props => {
    return(
        <div className='acts-container'>
            <h1>Good Will Gestures</h1>
            <div className='acts-list'>
            {props.acts.map((s, i) => <Acts act={s} key={i}/>)}
            </div>
        </div>
    )
}

export default ActsList; 