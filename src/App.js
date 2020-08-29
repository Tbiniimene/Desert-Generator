import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import bakery from './bakery.png'; 

const App= ()=>{

  const API_ID='d7ebcb1b';
  const API_KEY  ='b4008730c320bf21302872d39cad8da8';
  const [Deserts, setDeserts] =useState([]);
  const [Desert, setDesert] =useState([]);

  var NbrandomDesert;
  var randomDesert;
  useEffect(()=>{
    getDesserts();  
  },[]);

  const getDesserts=()=>{
    axios.get(`https://api.edamam.com/search?q=Desserts&app_id=${API_ID}&app_key=${API_KEY}`)
      .then(response=> setDeserts(response.data.hits))
  }

  const getRandomDessert=()=>{
    let alldeserts=Deserts;
    NbrandomDesert = Math.floor(Math.random()* Deserts.length);
    randomDesert=alldeserts[NbrandomDesert];
    if(randomDesert){
      setDesert(randomDesert.recipe);
    }
  }
      return (
        <div className="App">
          <div className="container">
            <div className="row">
            <span className="text">
            {Desert.label?  Desert.label: "Click me for a random Desert!"}
            </span>
              </div>
            </div><br/><br/>
            <div className="row">
            <div className="button_cont" align="center"> 
          <a className="desert-btn"  onClick={getRandomDessert} >
          <img src={bakery} alt="bakery" height="60" width="60" /></a>
          </div><br/><br/>
            </div>
            <div className="row">
            <span className="textd">
            {Desert.ingredientLines?  Desert.ingredientLines.map((ingrediant)=>
            <div key={ingrediant}>{ingrediant}</div>): " "}
            </span>
            </div>
          </div>
     );
  }
export default App;
