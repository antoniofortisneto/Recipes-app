import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import MainContainer from './pages/MainContainer';
import MainExplorer from './pages/MainExplorer';
import RecipeDetails from './pages/RecipeDetails';
import Explore from './pages/Explore';
// import ExploreFoods from './pages/ExploreFoods';
// import ExploreDrinks from './pages/ExploreDrinks';
import ExploreFoodsIng from './pages/ExploreFoodsIngredients';
import ExploreDrinksIng from './pages/ExploreDrinksIngredients';
// import ExploreNational from './pages/ExploreFoodsNationalities';
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
        <Route path="/foods/:id" component={ RecipeDetails } />
        <Route path="/drinks/:id" component={ RecipeDetails } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ MainExplorer } />
        <Route exact path="/explore/drinks" component={ MainExplorer } />
        <Route exact path="/explore/foods/ingredients" component={ ExploreFoodsIng } />
        <Route exact path="/explore/drinks/ingredients" component={ ExploreDrinksIng } />
        <Route exact path="/explore/foods/nationalities" component={ MainExplorer } />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ DoneRecipes } />
        <Route exact path="/favorite-recipes" component={ FavoriteRecipes } />
      </Switch>
    </Provider>
  );
}

export default App;
