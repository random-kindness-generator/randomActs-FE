import React from 'react';

import Acts from './acts';


const ActsList = props => {
    return(
        <div className='acts-container'>
            <h1>Good Will Gestures</h1>
            <div className='acts-list'>
            {props.acts.map((s, i) => <Act act={s} key={i}/>)}
            </div>
        </div>
    )
}

export default ActsList; 