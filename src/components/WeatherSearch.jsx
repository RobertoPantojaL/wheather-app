import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";

const WeatherSearch = () => {
  const [location, setLocation] = useState(""); // Entrada del usuario
  const [suggestions, setSuggestions] = useState([]); // Sugerencias de LocationIQ
  const [weatherData, setWeatherData] = useState(null); // Datos del clima
  const [error, setError] = useState(null); // Gestión de errores

  // Claves de API obtener del .env
  const LOCATIONIQ_API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;
const OPENWEATHER_API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";

  // Función para autocompletar usando LocationIQ
  const handleAutocomplete = async (query) => {
    if (query.length > 2) {
      try {
        const response = await axios.get(
          `https://api.locationiq.com/v1/autocomplete.php`,
          {
            params: {
              key: LOCATIONIQ_API_KEY,
              q: query,
              limit: 5,
            },
          }
        );
        setSuggestions(response.data); // Actualiza las sugerencias
      } catch (err) {
        console.error("Error en autocompletado:", err);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  // Función para buscar el clima con OpenWeather
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!location) return;

    try {
      const response = await axios.get(WEATHER_URL, {
        params: {
          q: location,
          appid: OPENWEATHER_API_KEY,
          units: "metric",
          lang: "es",
        },
      });
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      setError("No se pudo encontrar la ubicación. Intenta de nuevo.");
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Ingresa una ciudad..."
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            handleAutocomplete(e.target.value);
          }}
        />
        <button type="submit">Buscar</button>
      </form>

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setLocation(item.display_name);
                setSuggestions([]);
              }}
            >
              {item.display_name}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherSearch;
