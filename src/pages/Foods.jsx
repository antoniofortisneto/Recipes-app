import React, { useContext } from 'react';
import Header from '../components/Header';
import context from '../context';
import { Input } from '../components';
import Footer from '../components/Footer';

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
      <Footer />
    </section>
  );
}

export default Foods;
