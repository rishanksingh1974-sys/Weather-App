import SearchBox from './Searchbox.jsx';
import Info from "./Info.jsx";
import "./WeatherApp.css";
import { useState } from "react";

export default function WeatherApp() {
    let [weather, setWeather] = useState({
        city: "Delhi",
        feelslike: 21.99,
        humidity: 68,
        temp: 21.96,
        tempMax: 21.96,
        tempMin: 21.96,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeather(newInfo);
    };

    return (
        <div className="WeatherApp">
            <header className="weather-header">
                <span className="weather-badge">✨ Live Forecast</span>
                <h1>Weather Radar</h1>
                <p>Real-time atmospheric insights & conditions</p>
            </header>
            <SearchBox updateInfo={updateInfo} />
            <Info info={weather} />
        </div>
    );
}
