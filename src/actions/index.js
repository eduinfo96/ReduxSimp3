import axios from 'axios';

const API_KEY = 'ff1300ac4f5f9f762023077528ec0d4f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${ API_KEY }`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city ){
  const url = `${ ROOT_URL }&q=${ city },us`;
  const request = axios.get( url );

  return{
    type: FETCH_WEATHER
    , payload: request
  };
}
