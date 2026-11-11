import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import "./Searchbox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let res = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMax: jsonResponse.main.temp_max,
                tempMin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description
            };
            console.log(res);
            return res;
        }
        catch (err) {
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);
        }
        catch (err) {
            setError(true);
        }
    };

    return (
        <div className="Searchbox">
            <form onSubmit={handleSubmit} className="search-form">
                <TextField 
                    id="city" 
                    label="Enter city name..." 
                    variant="outlined" 
                    size="medium"
                    value={city} 
                    onChange={handleChange} 
                    required 
                />
                <Button 
                    variant="contained" 
                    type="submit" 
                    className="search-btn"
                    endIcon={<SearchIcon />}
                >
                    Search
                </Button>
            </form>
            {error && (
                <div className="search-error">
                    <ErrorOutlinedIcon fontSize="small" />
                    <span>City not found! Please check the spelling.</span>
                </div>
            )}
        </div>
    );
}
