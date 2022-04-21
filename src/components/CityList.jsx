import * as React from 'react';
import {useContext} from "react";
import WeatherContext from '../context/WeatherContext';

const CityList = (props) => {
    const context = useContext(WeatherContext);
    // console.log(context.cities[0].name)
    // console.log(context.cities[0].temperature)
    console.log(context.cities)
  
    return (
      <table className="city-list">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Description</th>
            <th>Feels Like</th>
            <th>Wind Speed</th>
            <th>Icon Code</th>
          </tr>
        </thead>
        <tbody>
          {context.cities.map((city, i) => (
            <tr key={city.name+i}>
              <td>{city.name}</td>
              <td>{city.temperature}</td>
              <td>{city.description}</td>
              <td>{city.feelsLike}</td>
              <td>{city.WindSpeed}</td>
              <td>{city.imgIcon}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  export default CityList;