import React, { useContext } from 'react';
import Header from '../components/Header';
import context from '../context';
import { Input } from '../components';

function Foods() {
  const { isSearchClicked } = useContext(context);
  return (
    <section>
      <Header title="Foods" showSearch />
      { isSearchClicked && (
        <Input
          type="text"
          value=""
          onChange={ () => {} }
          placeholder="Search Recipe"
          id="search-input"
        />
      ) }
    </section>
  );
}

export default Foods;
