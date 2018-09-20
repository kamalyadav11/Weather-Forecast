import { FETCH_WEATHER } from "../actions/index";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; //this is for when user searches more city, so we are pushing them to state array
  }
  return state;
};
