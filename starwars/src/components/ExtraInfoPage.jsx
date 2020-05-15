import React from 'react';
import styled from 'styled-components';
import StyledButton from './StyledButton';

const StyledExtraInfoPage = styled.div`
    position: fixed;
    background: rgba(0, 0, 0, .8);
    top: 0;
    width: 100%;
    min-height: 100vh;

    .infoDiv {
        margin: 1rem auto;
        width: 80%;
        background: white;
        border-radius: 10px;
        padding: 1rem 0;
    }

    .characterInfo div {
        display: flex;
        justify-content: center;

        p {
            margin: 1rem;
        }
    }
`;

const ExtraInfoPage = (props) => {

    const handleSetShowInfo = (e) => {
        e.preventDefault();
        props.setShowInfo(false);
    }

    return (
        <StyledExtraInfoPage>
            <div className='infoDiv'>
                <h2>{props.extraCharData[0]}</h2>
                <div className='characterInfo'>
                    <div>
                        <p className='label'>Home Planet:</p>
                        <p className='info'>{props.extraCharData[1]}</p>
                    </div>
                </div>
                <StyledButton onClick={handleSetShowInfo}>Close</StyledButton>
            </div>
        </StyledExtraInfoPage>
    )
}

export default ExtraInfoPage;