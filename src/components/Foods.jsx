import React from 'react';
import useRequestFoods from '../hooks/useRequestFoods';

function Foods() {
  const [data] = useRequestFoods();
  console.log(data);
  return (
    <h1>iFoods</h1>
  );
}

export default Foods;
