import axios from 'axios';

const API_KEY = '0dbad44851667d998b4c0f15ebbc7420';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}&cnt=16`
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}