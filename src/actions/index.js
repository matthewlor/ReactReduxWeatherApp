import axios from 'axios';

const API_KEY = 'fa449f17f18b0ed1bcadd53310fecb8d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
