import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from '.';
import '../App.css';

function Provider({ children }) {
  const [dataFood, setDataFood] = useState([]);
  const [isSearchClicked, setSearchClicked] = useState(false);
  // input de busca
  const [search, setSearch] = useState('');
  // filtros do component search
  const [searchType, setSearchType] = useState('name');
  const [searchCategoryFood, setSearchCategoryFood] = useState('All');
  const [searchCategoryDrink, setSearchCategoryDrink] = useState('All');
  const [isRecipeSurprise, setisRecipeSurprise] = useState(
    {
      choice: '',
      isSurprise: false,
    },
  );
  const [area, setArea] = useState('All');
  const [userEmail, setUserEmail] = useState([]);
  const [ingredientsInProgress, setIngredientsInProgress] = useState([]);

  const saveSearch = (searchField, type) => {
    setSearch(searchField);
    setSearchType(type);
  };

  const saveSearchCategoryFood = (category) => {
    if (category === 'All') {
      setSearch('');
      setSearchType('name');
    }
    setSearchCategoryFood((prevFood) => (prevFood !== category
      ? category
      : 'All'));
  };

  const saveSearchCategoryDrink = (category) => {
    if (category === 'All') {
      setSearch('');
      setSearchType('name');
    }
    setSearchCategoryDrink((prevDrink) => (prevDrink !== category
      ? category
      : 'All'));
  };

  // Value = food ou drink, isActive é para informar se o botao de receita surpresa foi clicada
  const saveIsRandomRecipe = (value, isActive) => {
    setisRecipeSurprise(({ choice: value, isSurprise: isActive }));
  };

  // salva a origem da comida, ex: American
  const saveArea = (areaValue) => {
    setArea(areaValue);
  };

  const contextValue = {
    dataFood,
    setDataFood,
    search,
    searchType,
    isSearchClicked,
    setSearchClicked,
    setSearchType,
    saveSearch,
    /* categoriesFood */
    /* setCategoriesFoods */
    searchCategoryFood,
    saveSearchCategoryFood,
    searchCategoryDrink,
    saveSearchCategoryDrink,
    isRecipeSurprise,
    setisRecipeSurprise,
    saveIsRandomRecipe,
    area,
    saveArea,
    userEmail,
    setUserEmail,
    ingredientsInProgress,
    setIngredientsInProgress,
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.array,
}.isRequired;

export default Provider;
