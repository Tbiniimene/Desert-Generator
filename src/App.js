import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
//import Desert from './Desert';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const App= ()=>{

  const API_ID='d7ebcb1b';
  const API_KEY  ='b4008730c320bf21302872d39cad8da8';
  const [Desserts, setDesserts] =useState([]);
  const [rDesert, setrDesert] =useState([]);

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
      setrDesert(randomDesert.recipe.label);
      console.log(rDesert);


    }
   
  }
      return (
        <div className="App">

          <div></div>
          <button className="btn-f" onClick={getRandomDessert}> Go! </button>
        <span className="text">
        {rDesert?  rDesert: "loading"}
        </span>

        <br />

        <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>
       
        </div>
      );
    
 
  }




export default App;
