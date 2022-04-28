import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import userRequestDrinks from '../hooks/useRequestDrinks';

function Drinks() {
  const history = useHistory();
  const [data] = userRequestDrinks();

  useEffect(() => {
    if (Array.isArray(data) && data.length === 1) {
      const { idDrink } = data[0];
      history.push(`/drinks/${idDrink}`);
    }
  }, [data, history]);

  console.log(data);
  return (
    <>
      <h1>Drinks</h1>
      { typeof data === 'string' && <h2>{data}</h2> }
    </>
  );
}

export default Drinks;
