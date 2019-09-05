import React from "react";
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const StyledH2 = styled.h2`
  margin: 3% 20%;
  width: 60%;
  text-align: center;
  font-size: 2.8em;
`;

const StyledP = styled.p`
  margin: 5% 20%;
  width: 60%;
  display: flex;
  justify-content: center;
  font-size: 1.6em;
  font-weight: 500;
`;

const CharacterName = (props) => {
    console.log("CharacterName", props);
  return (
    <StyledContainer>
      <StyledH2>{props.name}</StyledH2>  
      <StyledP>Gender: {props.gender}</StyledP>  
    </StyledContainer>
  );
}


export default CharacterName;