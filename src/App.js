import React from 'react';
import './App.css';
import Body from './components/body/Body';
import Results from './components/results/Results';
import SearchContainer from './components/search/Search';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FiveDaysResults from './components/results/FiveDays';
import { useSelector } from 'react-redux';


const App = () => {

  const display = useSelector(state => state.display);

    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Body>
          <Switch>
            <Route exact path="/">
              <SearchContainer />
              {display !== null && <Results />}
            </Route>
            <Route path="/fivedays">
              <FiveDaysResults />
            </Route>
          </Switch>
        </Body>
      </Router>
    )
  
}

export default App;
