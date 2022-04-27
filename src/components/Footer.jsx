import React from 'react';
import { Link } from 'react-router-dom';
import MealIcon from '../images/mealIcon.svg';
import DrinkIcon from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';

export default function Footer() {
  const footerClass = {
    position: 'fixed',
    bottom: 0,
    left: 0,
  };

  return (
    <footer data-testid="footer" style={ footerClass } className="footer">
      <Link href="/drinks" data-testid="drinks-bottom-btn">
        <img src={ DrinkIcon } alt="DrinkIcon" />
      </Link>
      <Link href="/explore" data-testid="explore-bottom-btn">
        <img src={ ExploreIcon } alt="ExploreIcon" />
      </Link>
      <Link href="/foods" data-testid="food-bottom-btn">
        <img src={ MealIcon } alt="MealIcon" />
      </Link>
    </footer>
  );
}
