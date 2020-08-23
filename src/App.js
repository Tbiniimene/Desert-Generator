import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


const App= ()=>{

  const API_ID='d7ebcb1b';
  const API_KEY  ='b4008730c320bf21302872d39cad8da8';
  const [Desserts, setDesserts] =useState([]);
  
  var NbrandomDesert;
  var randomDesert;
  useEffect(()=>{
    getDesserts();  
  },[]);

  const getDesserts=()=>{
    axios.get(`https://api.edamam.com/search?q=Desserts&app_id=${API_ID}&app_key=${API_KEY}`)
      .then(response=> setDesserts(response.data.hits))
  }

  const getRandomDessert=()=>{
    let alldesert=Desserts;
    NbrandomDesert = Math.floor(Math.random()* Desserts.length);
    console.log(NbrandomDesert);
    randomDesert=alldesert[NbrandomDesert];
    if(randomDesert){
      console.log(randomDesert.recipe.label);
    }
   
  }
   //getRandomDessert();

      return (
        <div className="App">
          <button onClick={getRandomDessert}>
      Generate Dessert
        </button>

        <ul>
      {randomDesert? randomDesert.recipe.label: "loading"}
        </ul>
        </div>
      );
    
 
  }




export default App;
