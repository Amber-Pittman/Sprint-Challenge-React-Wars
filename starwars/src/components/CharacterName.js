import React from "react";

const CharacterName = (props) => {
    console.log("CharacterName", props);
  return (
    <>
    <h2>{props.name}</h2>  
    <p>{props.gender}</p>  
    </>
  );
}


export default CharacterName;