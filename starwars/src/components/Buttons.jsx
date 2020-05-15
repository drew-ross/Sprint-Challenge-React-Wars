import React, { useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    background: rgba(255, 255, 255, .8);
    border-radius: 10px;
    width: 10rem;
    height: 2rem;
    margin: 1rem;
`;

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
            <StyledButton onClick={decreaseCharPage}>Previous</StyledButton>
            <StyledButton onClick={increaseCharPage}>Next</StyledButton>
        </div>
    )
}

export default Button;