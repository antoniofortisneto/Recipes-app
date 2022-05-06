import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components';
import styles from '../styles/profile.module.css';
import index from '../context/index';

function Profile() {
  const history = useHistory();
  const { userEmail } = useContext(index);

  const handleRedirect = (path) => history.push(path);

  return (
    <section className={ styles.profile_container }>
      <Header title="Profile" />
      <div className={ styles.profile_items }>
        <h2 data-testid="profile-email">{ userEmail }</h2>
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
