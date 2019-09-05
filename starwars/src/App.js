import React, {useState, useEffect} from 'react';
import axios from "axios";
import Characters from "./components/Characters.js";
import styled from 'styled-components';
//import './App.css';

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);

  const StyledH1 = styled.h1`
  font-size: 6em;
  margin: 0 2.5em;
  display: flex;
  justify-content: center;
`;

  useEffect(() => {
    console.log("first render");
    axios.get("https://swapi.co/api/people/")
    .then(response => {
        console.log(response.data);	
        setData(response.data.results); 
    });	      
  }, []);
  

  return (
    <div className="App">
      <StyledH1 className="Header">React Wars</StyledH1>

      <Characters name={data} />
    </div>
  );
}

export default App;