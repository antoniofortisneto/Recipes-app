import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '.';
import context from '../context';
import { getParameterSearchDrink,
  getParameterSearchMeal } from '../helpers/requestsHelper';
import { requestDrinks } from '../services/apiDrink';
import { requestFoods } from '../services/apiFood';
import styles from '../styles/explore.module.css';

function SearchExplorer() {
  const { saveIsRandomRecipe, isRecipeSurprise } = useContext(context);
  const { choice, isSurprise } = isRecipeSurprise;

  const history = useHistory();
  const route = history.location.pathname;
  const splitRoute = route.split('/');
  const type = splitRoute[2];

  useEffect(() => {
    const request = async () => {
      try {
        if (isSurprise && choice === 'foods') {
          const parameter = getParameterSearchMeal('random');
          const { meals } = await requestFoods(parameter, '');
          history.push(`/${choice}/${meals[0].idMeal}`);
        }

        if (isSurprise && choice === 'drinks') {
          const parameter = getParameterSearchDrink('random');
          const { drinks } = await requestDrinks(parameter, '');
          history.push(`/${choice}/${drinks[0].idDrink}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, [isRecipeSurprise, isSurprise, history, choice]);

  const handleButtonClick = (param) => {
    if (param !== 'surprise') {
      history.push(`/explore/${type}/${param}`);
      return;
    }
    // indica que a receita é surpresa, passando (foods or drinks)
    saveIsRandomRecipe(type, true);
  };

  return (

    <section className={ styles.container_explore_by_type }>
      <section className={ styles.container_explore_buttons }>
        <Button
          value="ingredients"
          onClick={ (e) => handleButtonClick(e.target.value) }
          label="By Ingredient"
          id="explore-by-ingredient"
        />
        {type === 'foods'
      && <Button
        value="nationalities"
        onClick={ (e) => handleButtonClick(e.target.value) }
        label="By Nationality"
        id="explore-by-nationality"
      />}

        <Button
          value="surprise"
          onClick={ (e) => handleButtonClick(e.target.value) }
          label="Surprise me!"
          id="explore-surprise"
        />
      </section>
    </section>
  );
}

export default SearchExplorer;
