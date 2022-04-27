import React from 'react';
import { Link } from 'react-router-dom';
import mealIcon from '../images/mealIcon.svg';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';

export default function Footer() {
  const footerClass = {
    position: 'fixed',
    bottom: 0,
    left: 0,
  };

  return (
    <footer data-testid="footer" style={ footerClass } className="footer">
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
