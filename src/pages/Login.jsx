import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonState, setButtonState] = useState(true);
  const history = useHistory(); // https://reactrouter.com/docs/en/v6/upgrading/v5

  function validationCheck() {
    const minNumber = 6;
    if (email.match(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/) // https://regexr.com/3e48o
      && password.length >= minNumber) {
      setButtonState(false);
    } else {
      setButtonState(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('form submetido');
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/foods');
  }

  return (
    <div>
      <form onSubmit={ handleSubmit } className="content">
        <h1>Login</h1>
        <label htmlFor="email-input">
          <input
            data-testid="email-input"
            id="email-input"
            placeholder="E-mail"
            onChange={ ({ target }) => {
              validationCheck();
              setEmail(target.value);
            } }
          />
        </label>

        <label htmlFor="password-input">
          <input
            data-testid="password-input"
            id="password-input"
            placeholder="Password"
            type="password"
            onChange={ ({ target }) => {
              validationCheck();
              setPassword(target.value);
            } }
          />
        </label>

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
