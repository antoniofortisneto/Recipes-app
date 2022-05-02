import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import styles from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer data-testid="footer" className={ styles.footer }>
      <Link to="/drinks">
        <img
          src={ drinkIcon }
          alt="DrinkIcon"
          data-testid="drinks-bottom-btn"
        />
      </Link>
      <Link to="/explore">
        <img
          src={ exploreIcon }
          alt="ExploreIcon"
          data-testid="explore-bottom-btn"
        />
      </Link>
      <Link to="/foods">
        <img
          src={ mealIcon }
          alt="MealIcon"
          data-testid="food-bottom-btn"
        />
      </Link>
    </footer>
  );
}
