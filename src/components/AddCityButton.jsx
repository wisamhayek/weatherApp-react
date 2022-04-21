import * as React from 'react';
import {useContext} from "react";
import { useEffect, useState } from 'react';
import WeatherContext from '../context/WeatherContext';
import axios from "axios";
import { Button, TextField } from '@mui/material';

const AddCityButton = (props) => {
    const context = useContext(WeatherContext);
    
    const APIKey = "660a159049b2cd3ac8e3a00954cbeba4"
    const [name, setName] = useState('Vancouver');
  
    const submit = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIKey}&units=metric`).then(function(response) {
            console.log(response.data);
            //Add to global Context what I fetched.
            context.addCity(name, response.data.main.temp, response.data.weather[0].description, response.data.main.feels_like, response.data.wind.speed, response.data.weather[0].icon);
            setName('');
        }).catch((error) => {
          alert("City not found, Please try again.")
          console.log(error);
          setName('');
        })
        }

        //on page load it will fetch Vancouver -> because it's the default value in useState (line11)
        useEffect(() => {
          submit();
        }, []);
        
        
    return (
      <div className="add-city-form">
        {/* Default value in input is the name from useState -> each onChange it will update the name in the State*/}
        <TextField className="inputCity" id="outlined-basic" value={name} label="City Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
        {/* when submit button clicked it will grab the name value from state (line 11) and runs submit function to fetch data*/}
        <Button className="submitButton" variant="contained" onClick={submit}>Search</Button>
      </div>
    );
  };
  export default AddCityButton;