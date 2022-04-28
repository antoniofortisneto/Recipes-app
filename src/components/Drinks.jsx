import React from 'react';
import userRequestDrinks from '../hooks/useRequestDrinks';

function Drinks() {
  const [data] = userRequestDrinks();
  console.log(data);
  return (
    <>
      <h1>Drinks</h1>
      { typeof data === 'string' && <h2>{data}</h2> }
    </>
  );
}

export default Drinks;
