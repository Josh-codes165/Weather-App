

function WeatherCard({weather}) {

    if(!weather){
        return <p>No weather data yet</p>
    }
    return (
        <div className="display">
            <h2>{weather.city}</h2>
            <p>Temperature: {weather.temp}</p>
            <p>Condition: {weather.condition}</p>
        </div>
    )
}

export default WeatherCard