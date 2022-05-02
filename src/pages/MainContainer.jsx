import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import context from '../context';
import Header from '../components/Header';
import Search from '../components/Search';
import Foods from '../components/Foods';
import Drinks from '../components/Drinks';
import Footer from '../components/Footer';
import FilterFood from '../components/FilterFood';
import FilterDrink from '../components/FilterDrink';

function MainContainer() {
  const history = useHistory();
  const { isSearchClicked } = useContext(context);
  const isFoods = history.location.pathname === '/foods';
  return (
    <section>
      { isFoods
        ? <Header title="Foods" showSearch />
        : <Header title="Drinks" showSearch /> }
      { isSearchClicked && <Search /> }
      { isFoods ? <FilterFood /> : <FilterDrink /> }
      { isFoods ? <Foods /> : <Drinks /> }

      <Footer />
    </section>
  );
}

export default MainContainer;
