import React, { useEffect } from 'react';

const Button = ({ charPage, setCharPage, error }) => {

    const handleSetCharPage = (number) => {
        return () => {
            if (charPage + number > 0 && !error) {
                setCharPage(charPage + number);
            } else if (error) {
                setCharPage(charPage - 1);
            }
        }
    }
    
    const increaseCharPage = handleSetCharPage(1);
    const decreaseCharPage = handleSetCharPage(-1);

    return (
        <div className='buttons'>
            <button onClick={decreaseCharPage}>Previous</button>
            <button onClick={increaseCharPage}>Next</button>
        </div>
    )
}

export default Button;