import React, { useContext } from 'react';
import { Button } from '.';
import context from '../context';

function FilterDrink() {
  const { saveSearchCategoryDrink } = useContext(context);

  const data = ['Ordinary Drink',
    'Cocktail', 'Milk / Float / Shake', 'Other/Unknown', 'Cocoa'];

  return (
    <section>
      <Button
        key="0"
        onClick={ (e) => saveSearchCategoryDrink(e.target.value) }
        label="All"
        id="All-category-filter"
        value="All"
      />
      { !data.length ? 'Falhou Categories Drinks' : (
        data.map((strCategory /* idCategory */, index) => (
          <Button
            key={ index + 1 }
            onClick={ (e) => saveSearchCategoryDrink(e.target.value) }
            label={ strCategory }
            id={ `${strCategory}-category-filter` }
            value={ strCategory }
          />
        ))
      ) }

    </section>
  );
}

export default FilterDrink;
