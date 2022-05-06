import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../styles/login.module.css';
import { getOneRecipeInProgress } from '../services/localStorage';
import index from '../context/index';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonState, setButtonState] = useState(true);
  const history = useHistory(); // https://reactrouter.com/docs/en/v6/upgrading/v5
  const { setUserEmail } = useContext(index);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('form submetido');
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify({ email }));
    getOneRecipeInProgress();
    setUserEmail(email);
    history.push('/foods');
  }

  useEffect(() => {
    function validationCheck() {
      const minNumber = 6;
      if (email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) // https://regexr.com/3e48o
        && password.length > minNumber) {
        setButtonState(false);
      } else {
        setButtonState(true);
      }
    }
    validationCheck();
  }, [email, password]);

  return (
    <div
      className={ styles.login__container }
    >

      <form
        onSubmit={ handleSubmit }
        className={ styles.form__login }
      >
        <div className="mb-3">
          <h1>Login</h1>
          <label htmlFor="email-input">
            <input
              data-testid="email-input"
              id="email-input"
              placeholder="E-mail"
              onChange={ ({ target }) => setEmail(target.value) }
            />
          </label>
        </div>

        <div className="mb-3">
          <label htmlFor="password-input">
            <input
              data-testid="password-input"
              id="password-input"
              placeholder="Password"
              type="password"
              onChange={ ({ target }) => setPassword(target.value) }
            />
          </label>
        </div>
        <button
          data-testid="login-submit-btn"
          type="submit"
          disabled={ buttonState }
        >
          Enter
        </button>
      </form>

    </div>

  );
}
