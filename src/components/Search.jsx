import React, { useContext, useState } from 'react';
import { Button, Input } from '.';
import context from '../context';

function Search() {
  const { saveSearch } = useContext(context);
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('');

  const handleSearch = ({ target: { value } }) => setSearch(value);
  const handleType = ({ target: { value } }) => setSearchType(value);
  const handleButtonClick = () => saveSearch(search, searchType);

  return (
    <>
      <Input
        type="text"
        value={ search }
        onChange={ handleSearch }
        placeholder="Search Recipe"
        id="search-input"
      />
      <Input
        type="radio"
        label="ingredient"
        name="search-radio"
        value="ingredient"
        onChange={ handleType }
        id="ingredient-search-radio"
      />
      <Input
        type="radio"
        label="name"
        name="search-radio"
        value="name"
        onChange={ handleType }
        id="name-search-radio"
      />
      <Input
        type="radio"
        label="letter"
        name="search-radio"
        value="letter"
        onChange={ handleType }
        id="first-letter-search-radio"
      />
      <Button
        onClick={ handleButtonClick }
        label="Search"
        id="exec-search-btn"
      />
    </>
  );
}

export default Search;
