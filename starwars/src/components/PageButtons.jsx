import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';

const PageButtons = ({ charPage, setCharPage, error }) => {

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

export default PageButtons;