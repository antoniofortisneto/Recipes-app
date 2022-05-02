import React, { useContext } from 'react';
import { Button } from '.';
import context from '../context';
import styles from '../styles/meals.module.css';

function FilterDrink() {
  const { saveSearchCategoryDrink,
    isSearchClicked, searchCategoryDrink } = useContext(context);

  const data = ['Ordinary Drink',
    'Cocktail', 'Milk / Float / Shake', 'Other/Unknown', 'Cocoa'];

  return (
    <section className={ styles.filter_container }>
      {/* Se o filtro está habilitado, removo a imagem para ganhar espaço */}
      {!isSearchClicked && <div className={ styles.img_drinks } />}
      <div className={ styles.card_filter }>
        <Button
          key="0"
          onClick={ (e) => saveSearchCategoryDrink(e.target.value) }
          label="All"
          id="All-category-filter"
          value="All"
          className={ `${searchCategoryDrink === 'All' && styles.btn_clicked}` }
        />
        { !data.length ? 'Falhou Categories Drinks' : (
          data.map((strCategory /* idCategory */, index) => (
            <Button
              key={ index + 1 }
              onClick={ (e) => saveSearchCategoryDrink(e.target.value) }
              label={ strCategory }
              id={ `${strCategory}-category-filter` }
              value={ strCategory }
              className={ `${searchCategoryDrink === strCategory && styles.btn_clicked}` }

            />
          ))
        ) }
      </div>
    </section>
  );
}

export default FilterDrink;
