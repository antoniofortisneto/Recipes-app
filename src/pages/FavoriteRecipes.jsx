import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function FavoriteRecipes() {
  const [favorites, setFavorites] = useState('');
  const [labelButton, setLabelButton] = useState('');

  useEffect(() => {
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setFavorites(favoriteRecipes);
  }, []);

  const copyToClipBoard = (id, type) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setLabelButton('Link copied!');
  };

  const removeFavorites = (id) => {
    const newFavorites = favorites.filter((ele) => ele.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  const applyFilters = (typeFilter) => {
    const favoritesRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    if (typeFilter === 'all') {
      setFavorites(favoritesRecipes);
    }
    if (typeFilter === 'food') {
      setFavorites(favoritesRecipes.filter(({ type }) => type === typeFilter));
    }
    if (typeFilter === 'drink') {
      setFavorites(favoritesRecipes.filter(({ type }) => type === typeFilter));
    }
  };

  return (
    <section>
      <Header title="Favorite Recipes" />
      <section style={ { marginTop: '100px' } }>
        <Button
          label="All"
          onClick={ () => applyFilters('all') }
          id="filter-by-all-btn"
        />
        <Button
          label="Food"
          onClick={ () => applyFilters('food') }
          id="filter-by-food-btn"
        />
        <Button
          label="Drinks"
          onClick={ () => applyFilters('drink') }
          id="filter-by-drink-btn"
        />
      </section>
      <section>
        { favorites
        && favorites.map(
          ({ nationality, category, alcoholicOrNot, name, image, type, id }, index) => (
            <section key={ index }>
              <Link to={ `/${type}s/${id}` }>
                <img
                  style={ { width: '200px' } }
                  src={ image }
                  alt={ image }
                  data-testid={ `${index}-horizontal-image` }
                />
                <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
              </Link>
              {type === 'food' ? (
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {`${nationality} - ${category}`}
                </p>
              ) : (
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {`${alcoholicOrNot}`}
                </p>
              )}
              <Button
                onClick={ () => copyToClipBoard(id, type) }
                id={ `${index}-horizontal-share-btn` }
                img={ shareIcon }
                label={ labelButton }
              />
              <Button
                onClick={ () => removeFavorites(id) }
                id={ `${index}-horizontal-favorite-btn` }
                img={ blackHeartIcon }
                label=""
              />
            </section>
          ),
        )}
      </section>
    </section>
  );
}

export default FavoriteRecipes;
