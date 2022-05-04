import React from 'react';
import { Button } from '../components';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
  return (
    <section>
      <Header title="Favorite Recipes" />
      <section>
        <Button label="All" onClick={ () => {} } id="filter-by-all-btn" />
        <Button label="Food" onClick={ () => {} } id="filter-by-food-btn" />
        <Button label="Drinks" onClick={ () => {} } id="filter-by-drink-btn" />
      </section>
      <section>
        { favoriteRecipes
        && favoriteRecipes.map(
          ({ nationality, category, alcoholicOrNot, name, image }, index) => (
            <section key={ index }>
              <img src={ image } alt="" data-testid={ `${index}-horizontal-image` } />
              <span data-testid={ `${index}-horizontal-top-text` }>
                {`${nationality} - ${category} - ${alcoholicOrNot}`}
              </span>
              <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
              <span data-testid={ `${index}-horizontal-share-btn` }>Compartilhar</span>
              <Button
                label={ blackHeartIcon }
                onClick={ () => {} }
                id={ `${index}-horizontal-favorite-btn` }
              />
            </section>
          ),
        )}
      </section>
    </section>
  );
}

export default FavoriteRecipes;
