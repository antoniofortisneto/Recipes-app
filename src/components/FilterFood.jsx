import React, { useContext } from 'react';
import { Button } from '.';
// import useRequestCategFood from '../hooks/useRequestCategFood';
import context from '../context';

function FilterFood() {
  const { saveSearchCategoryFood } = useContext(context);

  // const [data] = useRequestCategFood();

  const data = ['Beef', 'Goat', 'Chicken', 'Breakfast', 'Dessert'];

  return (
    <section>
      <Button
        key="0"
        onClick={ (e) => saveSearchCategoryFood(e.target.value) }
        label="All"
        id="All-category-filter"
        value="All"
      />
      { !data.length ? 'Falhou Categories' : (
        data.map((strCategory /* idCategory */, index) => (
          <Button
            key={ index + 1 }
            onClick={ (e) => saveSearchCategoryFood(e.target.value) }
            label={ strCategory }
            id={ `${strCategory}-category-filter` }
            value={ strCategory }
          />
        ))
      ) }

    </section>
  );
}

export default FilterFood;
