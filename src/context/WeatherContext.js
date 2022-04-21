import { createContext } from "react";

const WeatherContext = createContext({
    cities: [],
    //Function to add to current array.
    addCity: (name, temperature, description, feelsLike, WindSpeed, imgIcon) => { },
  });

export default WeatherContext;