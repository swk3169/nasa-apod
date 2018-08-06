import axios from 'axios';

export function getAPOD(date = '') {
    return axios.get(`https://api.nasa.gov/planetary/apod?api_key=5pFVJLpTTrq0q8NggLnQSYmRB7KU1GCcepChVRu8&date=${date}`);
}