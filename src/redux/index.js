import { createStore } from 'redux';
import weatherData from '../data.json';

//state
const initialState = {
  display: null,
  input: "",
  data: weatherData
}

//actions

export const inputItem = (item) => {
  return {
    type: "INPUT_ITEM",
    payload: item
  }
}

export const addToDisplay = (item) => {
  return {
    type: "ADD_TO_DISPLAY",
    payload: item
  }
}    

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INPUT_ITEM":
      return { ...state, input: action.payload };
    case "ADD_TO_DISPLAY":
      return { ...state, display: action.payload, input: "" };
    default:
      return state;
  }
}


const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState())
})
export default store;
