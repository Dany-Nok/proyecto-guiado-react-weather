import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import './styles.css';

const LocationList= ({cities, onSelectedLocation}) => {

  const handlerWeatherLocationClick = (city) => {
    console.log('handlerWeatherLocationClick ok!');
    onSelectedLocation(city);
  }

  const strToComponent = (cities) => (
    cities.map(city =>
      <Paper zDepth = {1}>
      <WeatherLocation
        key = {city}
        city = {city}
        onWeatherLocationClick = {
          () => handlerWeatherLocationClick(city)
        }
      />
      </Paper>
    ))
  return (
  <div className="locationList">
    {strToComponent(cities)}
  </div>
  )
}

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
}

export default LocationList;
