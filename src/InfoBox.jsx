import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './InfoBox.css'

export default function InfoBox({info}) {
    const INIT_URL = 'https://images.unsplash.com/photo-1691848749209-025ba660a194?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xlYXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww'
    const HOT_URL = 'https://plus.unsplash.com/premium_photo-1688804790295-8356369391ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SE9UJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D'
    const COLD_URL = 'https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D'
    const RAIN_URL = 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww'
    /*let info = {
        city : "Kanpur",
        feelsLike: 315.74,
        humidity: 19,
        temp: 315.59,
        temp_max: 315.59,
        temp_min: 315.59,
        weather: "clear sky"
    }*/

    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={info.humidity > 353 ? RAIN_URL : info.temp > 298 ? HOT_URL : COLD_URL}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <div>Temperature : {info.temp}</div>
                            <div>Humidity : {info.humidity}</div>
                            <div>The weather can be descibes as {info.weather} and feels Like : {info.feelsLike}</div>
                            <div>Maximum Temperature : {info.temp_max}</div>
                            <div>Minimum Temperature : {info.temp_min}</div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </div>
        </div>
    )
}