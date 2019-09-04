import React, {useState} from 'react';
import CharacterName from "./CharacterName.js";

 function Characters(props) {

    const [charName, setCharName] = useState([]);
    console.log("Characters", props.name.results);

    // const char = props.data;
    // console.log(`This is the ${props.data}`);
    
    return (
        <div>
            {
                props.name.map((charName) => {
                return (<CharacterName name={charName.name}>
                    <h1>charName</h1>
                </CharacterName>
            )
            console.log(charName.name);
        })
    }
    </div>
);
};

 export default Characters;