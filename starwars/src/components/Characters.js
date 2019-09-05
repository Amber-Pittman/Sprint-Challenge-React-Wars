import React, {useState} from 'react';
import CharacterName from "./CharacterName.js";

 function Characters(props) {

    const [char, setCharName] = useState([]);
    console.log("Characters", props.name.results);

    // const char = props.data;
    // console.log(`This is the ${props.data}`);
    
    return (
        <div>
            {
                props.name.map((char) => {
                return (<CharacterName name={char.name} gender={char.gender}>
                </CharacterName>
            )
            
        })
    }
    </div>
);
};

 export default Characters;