import React from 'react';
import { Button } from '../components';
import Header from '../components/Header';

function DoneRecipes() {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  return (
    <section>
      <Header title="Done Recipes" />
      <section>
        <Button label="All" onClick={ () => {} } id="filter-by-all-btn" />
        <Button label="Food" onClick={ () => {} } id="filter-by-food-btn" />
        <Button label="Drinks" onClick={ () => {} } id="filter-by-drink-btn" />
      </section>
      <section>
        { doneRecipes
        && doneRecipes.map(({ category, name, image, doneDate, tags }, index) => (
          <section key={ index }>
            <img src={ image } alt="" data-testid={ `${index}-horizontal-image` } />
            <span data-testid={ `${index}-horizontal-top-text` }>{category}</span>
            <h3 data-testid={ `${index}-horizontal-name` }>{name}</h3>
            <span data-testid={ `${index}-horizontal-done-date` }>{doneDate}</span>
            <span data-testid={ `${index}-horizontal-share-btn` }>Compartilhar</span>
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
