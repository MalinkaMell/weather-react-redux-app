import React from 'react';
import Button from '../button/Button';
import SearchInput from '../input/Searchinput';
import { addToDisplay } from '../../redux';
import { useSelector, useDispatch } from 'react-redux';

const SearchContainer = () => {

  
  const searchItem = useSelector(state => state.input);
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

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
    <form className="w-100 px-2 mt-3">
      <div className="input-group mb-3">
        <SearchInput type="text" placeholder="Enter City" />
        <div className="input-group-append" >
          <Button handleSubmit={handleSubmit} type="submit" class="btn btn-primary" btnValue="Search" />
        </div>
      </div>
    </form>
  )
}

export default SearchContainer;