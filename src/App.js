import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainContainer from './pages/MainContainer';
import MainExplorer from './pages/MainExplorer';
import DetailsFoods from './pages/DetailsFoods';
import DetailsDrink from './pages/DetailsDrink';
import RecipeFoodInProgress from './pages/RecipeFoodInProgress';
import RecipeDrinkInProgress from './pages/RecipeDrinkInProgress';
import Explore from './pages/Explore';
import ExploreFoodsIng from './pages/ExploreFoodsIngredients';
import ExploreDrinksIng from './pages/ExploreDrinksIngredients';
import ExploreNational from './pages/ExploreFoodsNationalities';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ MainContainer } />
        <Route exact path="/drinks" component={ MainContainer } />
        <Route path="/foods/:id/in-progress" component={ RecipeFoodInProgress } />
        <Route path="/drinks/:id/in-progress" component={ RecipeDrinkInProgress } />
        <Route path="/foods/:id" component={ DetailsFoods } />
        <Route path="/drinks/:id" component={ DetailsDrink } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ MainExplorer } />
        <Route exact path="/explore/drinks" component={ MainExplorer } />
        <Route exact path="/explore/foods/ingredients" component={ ExploreFoodsIng } />
        <Route exact path="/explore/drinks/ingredients" component={ ExploreDrinksIng } />
        <Route exact path="/explore/foods/nationalities" component={ ExploreNational } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </Provider>
  );
}

export default App;
