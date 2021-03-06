import React from 'react';
import Button from '../button/Button';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Results = () => {

  const display = useSelector(state => state.display);

  return (

    Object.keys(display).length !== 0 ?
      <div className="px-2 text-center">
        <h3 className="my-3">{display.name}, {display.state}</h3>
        <ul className="list-inline d-flex">
          {
            display.forecast.map((item, i) => {
              const date = new Date(item.Date).toDateString();
              const today = new Date(display.currentdate).toDateString();
              if (date === today) {
                return (
                  <li className="list-inline-item flex-fill text-center results p-2" key={i}>
                    <p>{date}</p>
                    <p>{item.Time}</p>
                    <p>Temperature: {item.temprature}</p>
                    <p>{item.temprature >= 60 ? <i className="fas fa-sun fa-2x"></i> : <i className="fas fa-cloud fa-2x"></i>}</p>
                    <p>Feels: {item.feels}</p>
                  </li>
                )
              }
            })
          }
        </ul>
        <Link to="/fivedays"><Button type="button" btnValue="5 Day Weather" class="btn btn-primary my-4" /></Link>
      </div> :
      <h5 className="my-4">Sorry, we don't have results for this city</h5>
  )
}

export default Results;