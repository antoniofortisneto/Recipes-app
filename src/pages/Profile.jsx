import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components';
import styles from '../styles/profile.module.css';

function Profile() {
  const history = useHistory();
  const { email } = JSON.parse(localStorage.getItem('user'));

  const handleRedirect = (path) => history.push(path);

  return (
    <section className={ styles.profile_container }>
      <Header title="Profile" />
      <div className={ styles.profile_items }>
        <h2 data-testid="profile-email">{ email }</h2>
        <Button
          label="Done Recipes"
          onClick={ () => handleRedirect('/done-recipes') }
          id="profile-done-btn"
        />
        <Button
          label="Favorite Recipes"
          onClick={ () => handleRedirect('/favorite-recipes') }
          id="profile-favorite-btn"
        />
        <Button
          label="Logout"
          onClick={ () => { localStorage.clear(); handleRedirect('/'); } }
          id="profile-logout-btn"
        />
      </div>
      <Footer />
    </section>
  );
}

export default Profile;
