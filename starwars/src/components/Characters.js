import React, {useState} from 'react';
import CharacterName from "./CharacterName.js";

 function Characters(props) {

    const [charName, setCharName] = useState("name");
    console.log("Characters", props);
    
    return (
        <div>
            {charName.map(name => {
                return <CharacterName text={name} />;
            })}
        </div>
    );
};

 export default Characters