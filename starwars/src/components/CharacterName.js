import React from "react";

const CharacterName = (props) => {
    console.log("CharacterName", props);
  return (
    <h2>{props.text}</h2>    
  );
}


export default CharacterName;