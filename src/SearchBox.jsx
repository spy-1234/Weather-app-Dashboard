import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setcity] = useState("")
    let [error, setError] = useState(false)

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
    const API_KEY = '09155ee8db04cfef6e3a038ca694487d'

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metrics`)
            let jsonResponse = await response.json()
            //console.log(jsonResponse)
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result)
            return result
        } catch (err) {
            throw err
        }
    }

    let handleChange = (evt) => {
        setcity(evt.target.value)
    }

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault()
            console.log(city)
            setcity("")
            let newInfo = await getWeatherInfo()
            updateInfo(newInfo)
        }catch(err){
            setError("No such place in our API")
        }
    }


    return (
        <div className='SeachBox'>
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /> <br />
                <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color: "red"}}>No such places exists!</p>}
            </form>
        </div>
    )
}