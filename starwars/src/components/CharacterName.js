import React from "react";
import styled from "../node_modules/styled-components";


const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledH2 = styled.h2`
  font-size: 48px;
`;

const CharacterName = (props) => {
    console.log("CharacterName", props);
  return (
    <StyledContainer>
    <StyledH2>{props.name}</StyledH2>  
    <p>{props.gender}</p>  
    </StyledContainer>
  );
}


export default CharacterName;