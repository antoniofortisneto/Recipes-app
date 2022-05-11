import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import Header from '../components/Header';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import styles from '../styles/doneRecipe.module.css';

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
    setLabelButton(id);
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
      <section className={ styles.container_btn }>
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
      <section className={ styles.recipes_container }>
        { favorites
        && favorites.map(
          ({ nationality, category, alcoholicOrNot, name, image, type, id }, index) => (

            <section key={ index } className={ styles.card }>
              <Link to={ `/${type}s/${id}` }>
                <img
                  src={ image }
                  alt={ image }
                  data-testid={ `${index}-horizontal-image` }
                  className={ styles.img_recipe }
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
              <div className={ styles.social }>
                <Button
                  onClick={ () => copyToClipBoard(id, type) }
                  id={ `${index}-horizontal-share-btn` }
                  img={ shareIcon }
                  label={ labelButton === id ? 'Link copied!' : '' }
                  className={ styles.share_img }
                />
                <Button
                  onClick={ () => removeFavorites(id) }
                  id={ `${index}-horizontal-favorite-btn` }
                  img={ blackHeartIcon }
                  className={ styles.share_img }
                  label=""
                />
              </div>

            </section>
          ),

        )}
      </section>
    </section>
  );
}

export default FavoriteRecipes;
