import axios from 'axios';
const API_KEY = 'a38392dd42f6f7672afac6b47effca16';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ua`;
    const request = axios.get(url);

    console.log(request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
