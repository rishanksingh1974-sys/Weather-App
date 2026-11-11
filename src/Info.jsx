import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "./InfoBox.css";

export default function Info({ info }) {
    const INIT = "https://images.unsplash.com/photo-1669453343304-ced8306f87fe?q=80&w=1031&auto=format&fit=crop";
    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1000&auto=format&fit=crop";
    const COLD_URL = "https://images.unsplash.com/photo-1517030330234-94c4fb948ebc?q=80&w=1000&auto=format&fit=crop";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1000&auto=format&fit=crop";

    // Dynamic weather image based on conditions
    const weatherImage = info.humidity > 80 || (info.weather && info.weather.toLowerCase().includes("rain"))
        ? RAIN_URL
        : info.temp > 22
        ? HOT_URL
        : info.temp < 15
        ? COLD_URL
        : INIT;

    // Condition icon helper
    const getConditionIcon = () => {
        const desc = (info.weather || "").toLowerCase();
        if (desc.includes("rain") || desc.includes("drizzle") || desc.includes("thunderstorm")) {
            return <ThunderstormIcon fontSize="small" sx={{ color: "#38bdf8" }} />;
        }
        if (info.temp <= 15 || desc.includes("snow")) {
            return <AcUnitIcon fontSize="small" sx={{ color: "#93c5fd" }} />;
        }
        if (desc.includes("cloud") || desc.includes("haze") || desc.includes("mist") || desc.includes("smoke")) {
            return <CloudIcon fontSize="small" sx={{ color: "#cbd5e1" }} />;
        }
        return <WbSunnyIcon fontSize="small" sx={{ color: "#facc15" }} />;
    };

    const feelsLikeVal = info.feelslike ?? info.feelsLike;

    return (
        <div className="InfoBox">
            <div className="card-Container">
                <Card className="weather-card">
                    <div className="card-media-wrapper">
                        <CardMedia
                            image={weatherImage}
                            title={info.city}
                        />
                        <div className="media-gradient-overlay">
                            <div className="city-badge">
                                <LocationOnIcon />
                                <span>{info.city}</span>
                            </div>
                            <div className="temp-hero">
                                <span className="main-temp">{Math.round(info.temp)}°C</span>
                                <div className="condition-pill">
                                    {getConditionIcon()}
                                    <span>{info.weather}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <CardContent sx={{ padding: "20px 18px 18px !important" }}>
                        <div className="weather-details-grid">
                            <div className="detail-card">
                                <div className="detail-icon-wrapper blue">
                                    <WaterDropIcon fontSize="small" />
                                </div>
                                <div className="detail-info">
                                    <span className="detail-label">Humidity</span>
                                    <span className="detail-value">{info.humidity}%</span>
                                </div>
                            </div>

                            <div className="detail-card">
                                <div className="detail-icon-wrapper purple">
                                    <DeviceThermostatIcon fontSize="small" />
                                </div>
                                <div className="detail-info">
                                    <span className="detail-label">Feels Like</span>
                                    <span className="detail-value">{feelsLikeVal}°C</span>
                                </div>
                            </div>

                            <div className="detail-card">
                                <div className="detail-icon-wrapper cyan">
                                    <ArrowDownwardIcon fontSize="small" />
                                </div>
                                <div className="detail-info">
                                    <span className="detail-label">Min Temp</span>
                                    <span className="detail-value">{info.tempMin}°C</span>
                                </div>
                            </div>

                            <div className="detail-card">
                                <div className="detail-icon-wrapper orange">
                                    <ArrowUpwardIcon fontSize="small" />
                                </div>
                                <div className="detail-info">
                                    <span className="detail-label">Max Temp</span>
                                    <span className="detail-value">{info.tempMax}°C</span>
                                </div>
                            </div>
                        </div>

                        <Typography component="div" className="weather-summary-text">
                            The weather is described as <i>{info.weather}</i> with an actual temperature of {info.temp}°C.
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
