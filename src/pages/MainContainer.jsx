import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import context from '../context';
import Header from '../components/Header';
import Search from '../components/Search';
import Foods from '../components/Foods';
import Drinks from '../components/Drinks';

function MainContainer() {
  const history = useHistory();
  const { isSearchClicked } = useContext(context);
  const isFoods = history.location.pathname === '/foods';
  return (
    <section>
      { isFoods
        ? <Header title="Foods" showSearch />
        : <Header title="Drinks" showSearch />}
      { isSearchClicked && <Search /> }
      { isFoods ? <Foods /> : <Drinks /> }
    </section>
  );
}

export default MainContainer;
