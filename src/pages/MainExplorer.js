import React, { /* useContext */ } from 'react';
import { useHistory } from 'react-router-dom';
// import context from '../context';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExploreFoods from './ExploreFoods';
import ExploreDrinks from './ExploreDrinks';
import SearchExplorer from '../components/SearchExplorer';

function MainExplorer() {
  const history = useHistory();
  const isFoodExplorer = history.location.pathname === '/explore/foods';

  return (
    <section>
      { isFoodExplorer
        ? <Header title="Explore Foods" />
        : <Header title="Explore Drinks" /> }

      <SearchExplorer />

      { isFoodExplorer ? <ExploreFoods /> : <ExploreDrinks /> }
      <Footer />
    </section>
  );
}

export default MainExplorer;
