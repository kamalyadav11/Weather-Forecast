//Middlewares are function that takes actions and depending on actions type and action's payload, the middleware can choose to let the action pass through, manipulate it, stop it, log it before it reaches reducer. Like gateKeeper to reducers.
import axios from "axios";
const API_KEY = "051213c218b6f19a74e50286f9635adf";
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = city => {
  const url = `${ROOT_URL}&${city}`;
  const request = axios.get(url);

  type: FETCH_WEATHER;
  payload: request;
};
