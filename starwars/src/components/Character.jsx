import React from 'react';

const Character = (props) => {

    return (
        <div className='character'>
            <h2>{props.character.name}</h2>
        </div>
    )
}

export default Character;