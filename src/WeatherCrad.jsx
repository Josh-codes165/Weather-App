function WeatherCard({ weather }) {
  if (!weather) {
    return null;
  }
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

  return (
    <div className="display">
      <h2>
        {weather.city},{weather.country}
      </h2>
      <img src={iconUrl} alt={weather.condition} />
      <p>Temperature: {weather.temp}°C</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
}

export default WeatherCard;
