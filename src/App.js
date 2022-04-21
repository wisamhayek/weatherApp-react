import './App.css';
import { useState } from 'react';
import WeatherContext from './context/WeatherContext';
import AddCityButton from './components/AddCityButton';
import CardCity from './components/CardCity';

function App() {
    const [cities, setCities] = useState([]);

    const addCity = (name, temperature,description,feelsLike, WindSpeed, imgIcon) => {
      setCities(prevCities => [...prevCities, { name, temperature,description,feelsLike, WindSpeed, imgIcon}]);
    };

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
      <div className={`${theme}`}>
      <WeatherContext.Provider  value={{cities,addCity}}>
        <div className={`city-overview`}>
          <h2>Weather App</h2>
          <button className="themeButton" onClick={themeToggler}>Switch Theme</button>
          <AddCityButton />
          {cities != null && <CardCity data={cities}/> }
        </div>
      </WeatherContext.Provider>
      </div>
    );
  }
  
  export default App;