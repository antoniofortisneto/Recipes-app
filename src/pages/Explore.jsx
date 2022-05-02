import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/explore.module.css';

function Explore() {
  return (
    <section>
      <Header title="Explore" />
      <section className={ styles.explore }>
        <Link
          to="/explore/foods"
          data-testid="explore-foods"
        >
          Explore Foods
        </Link>
        <Link
          to="/explore/drinks"
          data-testid="explore-drinks"
        >
          Explore Drinks
        </Link>
      </section>

      <Footer />
    </section>
  );
}

export default Explore;
