import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../images/notFound.png';
import home from '../images/home.png';
import styles from '../styles/explore.module.css';

function NotFound() {
  return (
    <div className={ styles.not_found_container }>
      <section className={ styles.not_found_items }>
        <p>Not Found</p>
        <img src={ notFound } alt="not found" />
        {' '}
        <Link
          to="/explore/foods"
          data-testid="explore-foods"
        >
          <img src={ home } alt="home" />
        </Link>
      </section>
    </div>
  );
}

export default NotFound;
