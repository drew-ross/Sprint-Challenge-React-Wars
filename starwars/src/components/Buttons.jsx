import React from 'react';

const Button = ({charPage, setCharPage}) => {

    handleSetCharPage = (e) => {
        preventDefault();
    }

    return (
        <div className='buttons'>
            <button>Previous</button>
            <button>Next</button>
        </div>
    )
}

export default Button;