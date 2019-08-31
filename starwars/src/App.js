import React, {useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Characters from "./components/Characters.js";
import styled from "styled-components";

// import './App.css';

function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState("");

  useEffect(() => {
    console.log("first render");
    axios.get("https://swapi.co/api/people/")
    .then(response => {
        console.log(response.data);	
        setData(response.data); 
    });	      
  }, []);
  

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <Characters name={data.name} />
    </div>
  );
}

export default App;
