import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
    width: 80%;
    background: rgba(255, 255, 255, .8);
    border-radius: 10px;
    margin: 1rem auto;
    padding: 1rem 0;

    .characterInfo {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`;

const Character = (props) => {

    return (
        <StyledCharacter>
            <h2 className='characterName'>{props.character.name}</h2>
            <div className='characterInfo'>
                <div>
                    <p className='label'>Born</p>
                    <p className='info'>{props.character.birth_year}</p>
                </div>
                <div>
                    <p className='label'>Gender</p>
                    <p className='info'>{props.character.gender}</p>
                </div>
                <div>
                    <p className='label'>Height</p>
                    <p className='info'>{props.character.height}cm</p>
                </div>
                <div>
                    <p className='label'>Mass</p>
                    <p className='info'>{props.character.mass}kg</p>
                </div>
                <div>
                    <p className='label'>Hair Color</p>
                    <p className='info'>{props.character.hair_color}</p>
                </div>
                <div>
                    <p className='label'>Skin Color</p>
                    <p className='info'>{props.character.skin_color}</p>
                </div>
                <div>
                    <p className='label'>Eye Color</p>
                    <p className='info'>{props.character.skin_color}</p>
                </div>
            </div>
        </StyledCharacter>
    )
}

export default Character;