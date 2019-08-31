import React, {useState} from 'react';
import CharacterName from "./CharacterName.js";

 function Characters(props) {

    const [charName, setCharName] = useState([]);
    console.log("Characters", props);

    // const char = props.data;
    // console.log(`This is the ${props.data}`);
    
    return (
        <div>
            {
                charName.map((charName) => {
                return (<CharacterName>
                    <Name>{charName.name}</Name>
                </CharacterName>
            )
        })
    }
    </div>
);
};

 export default Characters;