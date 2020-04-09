import React from 'react';
import './App.css';
import Body from './components/body/Body';
import Results from './components/results/Results';
import SearchContainer from './components/search/Search';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FiveDaysResults from './components/results/FiveDays';

import { addToDisplay, inputItem } from './redux';
import { useSelector, useDispatch } from 'react-redux';


const App = () => {

  const searchItem = useSelector(state => state.input);
  const data = useSelector(state => state.data);
  const display = useSelector(state => state.display);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(inputItem(e.target.value))
  }

  const handleSubmit = e => {
    e.preventDefault();

    //new object to contain extracted data 
    const displayData = {}

    //shortening state for easier use
    const state = data.States;

    //find in what state is my searched city
    const findState = Object.keys(state).map(key => {
      const index = []
      state[key].cities.map((city, i) => searchItem.toLowerCase() === city.name.toLowerCase() && index.push(key));
      return index
    })

    //find city index
    const findCityIndex = Object.keys(state).map(key => {
      const index = []
      state[key].cities.map((city, i) => searchItem.toLowerCase() === city.name.toLowerCase() && index.push(i));
      return index
    })

    //flat 
    const cityIndex = parseInt(findCityIndex.flat().toString())

    //saving state in diplay object
    findState.flat().toString() !== "" && (displayData.state = findState.flat().toString())

    //search data using saved state object and cityIndex and saving it
    Object.keys(state).filter(key => {
      if (key === displayData.state) {
        displayData.name = state[key].cities[cityIndex].name
        displayData.state = key
        displayData.currentdate = state[key].currentdate
        displayData.time = state[key].time
        displayData.forecast = state[key].cities[cityIndex].forecast
      }
      return false
    })

    console.log(displayData)
    //set new state
    dispatch(addToDisplay(displayData))
  }

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Body>
          <Switch>
            <Route exact path="/">
              <SearchContainer handleChange={handleChange} handleSubmit={handleSubmit} input={searchItem} />
              {display !== null && <Results city={display} />}
            </Route>
            <Route path="/fivedays">
              <FiveDaysResults city={display} />
            </Route>
          </Switch>
        </Body>
      </Router>
    )
  
}

export default App;
