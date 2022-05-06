import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

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
    setLabelButton('Link copied!');
  };

  const applyFilters = (typeFilter) => {
    const done = JSON.parse(localStorage.getItem('doneRecipes'));
    if (typeFilter === 'all') {
      setDoneRecipes(done);
    }
    if (typeFilter === 'food') {
      setDoneRecipes(done.filter(({ type }) => type === typeFilter));
    }
    if (typeFilter === 'drink') {
      setDoneRecipes(done.filter(({ type }) => type === typeFilter));
    }
  };

  return (
    <section>
      <Header title="Done Recipes" />
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
        { doneRecipes
        && doneRecipes.map(({
          category, name, image, doneDate, tags, nationality, alcoholicOrNot,
          id, type,
        }, index) => (
          <section key={ index }>
            <Link to={ `/${type}s/${id}` }>
              <img
                style={ { width: '300px' } }
                src={ image }
                alt=""
                data-testid={ `${index}-horizontal-image` }
              />
              <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
            </Link>
            <Button
              onClick={ () => copyToClipBoard(id, type) }
              id={ `${index}-horizontal-share-btn` }
              img={ shareIcon }
              label={ labelButton }
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
              {`${nationality} - ${category}`}
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
