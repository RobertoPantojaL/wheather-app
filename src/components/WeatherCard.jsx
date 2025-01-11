import React from "react";

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather } = weatherData;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>🌡️ Temperatura: {main.temp}°C</p>
      <p>🌡️ Sensación Térmica: {main.feels_like}°C</p>
      <p>🌦️ Clima: {weather[0].description}</p>
      <p>💧 Humedad: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
