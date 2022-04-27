import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
/* import rockGlass from './images/rockGlass.svg'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
// import { CATEGORIES, getAllFood } from './services/apiFood';
import { SEARCH, getAllDrinks } from './services/apiDrink';

function App() {
  useEffect(() => {
    getAllDrinks(SEARCH, 's=margarita').then((result) => console.log(result));
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
