import { useState } from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCrad";
import { useEffect } from "react";

const API_KEY = "f06205aca8e0c0b55b4c6eccc172d459";
function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(() => {
    return localStorage.getItem("lastcity") || "";
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  useEffect(() => {
    if (city) {
      localStorage.setItem("lastcity", city);
    }
  }, [city]);
  useEffect(() => {
    if (!city) return;

    async function fetchWeather() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
        );
        console.log("Response Status", response.status);
        if (!response.ok) {
          throw new Error("City not Found");
        }

        const data = await response.json();
        console.log("API response", data);

        setWeather({
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          condition: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      } catch (err) {
        setError(err.message);
        setWeather(null);
      } finally {
        setLoading(false);
      }
    }

    fetchWeather();
  }, [city]);

  return (
    <div className="container">
      <h1 className="weather-text">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <WeatherCard weather={weather} />
    </div>
  );
}

export default App;
