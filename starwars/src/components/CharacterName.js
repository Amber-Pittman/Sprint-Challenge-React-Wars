import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 2.5em;
  display: flex;
  justify-content: center;
`;

const StyledH2 = styled.h2`
  font-size: 3.6em;
`;

const StyledP = styled.p`
  border: 2px solid blue;
  margin: 0 auto;
  font-size: 1.6em;
  font-weight: 500;
`;

const CharacterName = (props) => {
    console.log("CharacterName", props);
  return (
    <StyledContainer>
    <StyledH2>{props.name}</StyledH2>  

    <StyledP>{props.gender}</StyledP>  
    </StyledContainer>
  );
}


export default CharacterName;