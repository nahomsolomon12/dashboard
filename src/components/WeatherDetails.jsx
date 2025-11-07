import { useLocation } from "react-router-dom";

function WeatherDetails() {
    const { state: day } = useLocation();

    if (!day) return <p>No weather data provided.</p>;

    return (
        <div style={{ padding: "20px" }}>
            <h2>Particular Details for {day.datetime}</h2>
            <p>Average Temp: {day.temp}°C</p>
            <p>Precipitation: {day.precip}</p>
            <p>Wind Speed: {day.wind_spd}</p>
        </div>
    );
}

export default WeatherDetails;
