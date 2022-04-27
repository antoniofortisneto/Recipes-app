import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileImage from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header({ title }) {
  const history = useHistory();
  const handleProfileClick = () => history.push('/profile');

  return (
    <nav>
      <button type="button" onClick={ handleProfileClick }>
        <img
          src={ profileImage }
          alt="Perfil"
          data-testid="profile-top-btn"
        />
      </button>
      <h1 data-testid="page-title">{title}</h1>
      <img src={ searchIcon } alt="Busca" data-testid="search-top-btn" />
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default Header;
