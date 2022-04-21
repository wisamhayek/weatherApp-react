import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useContext } from 'react'
import WeatherContext from '../context/WeatherContext';

const CardCity = (props) => {
  
  const context = useContext(WeatherContext);

  //loop through each array in the global context and create/return a Card for it
  return (
    <div className="mainApp">
    {context.cities.map((city, i) => (
        <Card key={city.name+i} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="150"
          image={`https://openweathermap.org/img/wn/${city.imgIcon}@2x.png`}
          alt={city.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {city.name}
          </Typography>
          <p>Tempreature: {city.temperature} °C</p>
          <p>Description: {city.description}</p>
          <p>Feels Like: {city.feelsLike} °C</p>
          <p>Wind Speed: {city.WindSpeed} KM/H</p>
        </CardContent>
      </Card>
      //Reverse the return order.
    )).reverse()}
    </div>
  );
}
export default CardCity;