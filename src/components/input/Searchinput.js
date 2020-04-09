import React from 'react';
import { inputItem } from '../../redux';
import { useSelector, useDispatch } from 'react-redux';

const SearchInput = props => {

  const searchItem = useSelector(state => state.input);
  const dispatch = useDispatch();
  
  return (
    <React.Fragment>
      <input
        className="form-control"
        type={props.type}
        value={searchItem}
        onChange={e => dispatch(inputItem(e.target.value))}
        placeholder={props.placeholder}
        list="cities"
      />
      {/* Adding datalist for faster testing */}
      <datalist id="cities">
        <option value="Chicago" />
        <option value="New York" />
        <option value="Los Angeles" />
      </datalist>
    </React.Fragment>
  )
}

export default SearchInput;