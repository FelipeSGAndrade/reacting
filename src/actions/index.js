import axios from 'axios'

const API_KEY = 'ec3c74a8e0461200ca4b25cfd83eb0b6'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},br`

    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}