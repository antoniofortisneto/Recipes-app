import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

      <Footer />
    </section>
  );
}

export default MainExplorer;
