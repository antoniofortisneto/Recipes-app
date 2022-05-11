import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import styles from '../styles/doneRecipe.module.css';

const copy = require('clipboard-copy');

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState('');
  const [labelButton, setLabelButton] = useState('');

  useEffect(() => {
    const done = JSON.parse(localStorage.getItem('doneRecipes'));
    setDoneRecipes(done);
  }, []);

  const copyToClipBoard = (id, type) => {
    copy(`http://localhost:3000/${type}s/${id}`);
    setLabelButton(id);
  };

  const applyFilters = (typeFilter) => {
    const done = JSON.parse(localStorage.getItem('doneRecipes'));
    if (typeFilter === 'all' && done !== null) {
      setDoneRecipes(done);
    }

    if (typeFilter !== 'all' && done !== null) {
      setDoneRecipes(done.filter(({ type }) => type === typeFilter));
    }
  };

  return (
    <section>
      <Header title="Done Recipes" />
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
        { doneRecipes
        && doneRecipes.map(({
          category, name, image, doneDate, tags, nationality, alcoholicOrNot,
          id, type,
        }, index) => (
          <section key={ index } className={ styles.card }>
            <Link to={ `/${type}s/${id}` }>
              <img
                src={ image }
                alt=""
                data-testid={ `${index}-horizontal-image` }
                className={ styles.img_recipe }
              />
              <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
            </Link>
            <Button
              onClick={ () => copyToClipBoard(id, type) }
              id={ `${index}-horizontal-share-btn` }
              img={ shareIcon }
              label={ labelButton === id ? 'Link copied!' : '' }
              className={ styles.share_img }
            />
            {alcoholicOrNot ? (
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                {`${alcoholicOrNot}`}
              </p>
            ) : (
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                {`${nationality} - ${category}`}
              </p>
            )}
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {/*  {`${nationality} - ${category}`} */}
            </p>
            <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>
            <ul>
              { tags.map((tag, tagIndex) => (
                <li
                  key={ tagIndex }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                >
                  {tag}
                </li>
              )) }
            </ul>
          </section>
        ))}
      </section>
    </section>
  );
}

export default DoneRecipes;
