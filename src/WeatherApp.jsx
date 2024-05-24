import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city : "Kanpur",
        feelsLike: 315.74,
        humidity: 19,
        temp: 315.59,
        temp_max: 315.59,
        temp_min: 315.59,
        weather: "clear sky"
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return (
        <div style={{ textAlign: "center"}}>
            <h2>Welcome to the Weather App</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    )
}