import React, { useContext } from 'react';
import { Button } from '.';
// import beef from '../images/foods/beef.png';
// import useRequestCategFood from '../hooks/useRequestCategFood';
import context from '../context';
import styles from '../styles/meals.module.css';

function FilterFood() {
  const { saveSearchCategoryFood,
    isSearchClicked,
    searchCategoryFood } = useContext(context);

  // const [data] = useRequestCategFood();

  const data = ['Beef', 'Goat', 'Chicken', 'Breakfast', 'Dessert'];
  // const imgs = [beef, beef, beef, beef, beef];

  return (
    <section className={ styles.filter_container }>
      {!isSearchClicked && <div className={ styles.img_foods } /> }
      <div className={ styles.card_filter }>
        <Button
          key="0"
          onClick={ (e) => saveSearchCategoryFood(e.target.value) }
          label="All"
          id="All-category-filter"
          value="All"
          img=""
          className={ `${searchCategoryFood === 'All' && styles.btn_clicked}` }

        />
        { !data.length ? 'Falhou Categories' : (
          data.map((strCategory /* idCategory */, index) => (
            <Button
              key={ index + 1 }
              onClick={ (e) => saveSearchCategoryFood(e.target.value) }
              label={ strCategory }
              id={ `${strCategory}-category-filter` }
              value={ strCategory }
              img=""
              className={ `${searchCategoryFood === strCategory && styles.btn_clicked}` }
            />
          ))
        ) }
      </div>
    </section>
  );
}

export default FilterFood;
