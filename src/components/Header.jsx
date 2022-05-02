import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import context from '../context';
import profileImage from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import styles from '../styles/header.module.css';

function Header({ title, showSearch = false }) {
  const history = useHistory();
  const { isSearchClicked, setSearchClicked } = useContext(context);
  const handleProfileClick = () => history.push('/profile');
  const handleChangeSearch = () => setSearchClicked(!isSearchClicked);

  return (
    <nav className={ styles.header }>
      <button type="button" onClick={ handleProfileClick }>
        <img
          src={ profileImage }
          alt="Perfil"
          data-testid="profile-top-btn"
        />
      </button>
      <h1 data-testid="page-title">{title}</h1>
      {
        showSearch
        && (
          <button type="button" onClick={ handleChangeSearch }>
            <img src={ searchIcon } alt="Busca" data-testid="search-top-btn" />
          </button>
        )
      }
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  showSearch: PropTypes.bool,
}.isRequired;

export default Header;
