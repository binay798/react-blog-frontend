import React,{useState,useEffect} from 'react'
import classes from './Map.module.scss';
import ReactMapboxGl from "react-mapbox-gl";
// import 'mapbox-gl/dist/mapbox-gl.css'
const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoiYmluYXk2MDE0IiwiYSI6ImNraHVjcHd3ejFibTMycGt6bTIycHhmbGkifQ.993528lGt-9VwmgHPEaQ2w",
    minZoom: 2
});

function Maps() {

    const [state,setState] = useState({
        center:{
            lat:28.39,
            lon: 84.12,
        }
    })
    return (
        <div className={classes.map}>
            <Map 
                style="mapbox://styles/mapbox/streets-v8"
                center={[state.center.lon,state.center.lat]}
                zoom={[6]} 
            >
                
            </Map>
        </div>
    )
}

export default Maps
