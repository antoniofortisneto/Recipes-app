import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useRequestFoods from '../hooks/useRequestFoods';

function Foods() {
  const history = useHistory();
  const [data] = useRequestFoods();

  useEffect(() => {
    if (Array.isArray(data) && data.length === 1) {
      const { idMeal } = data[0];
      history.push(`/foods/${idMeal}`);
    }
  }, [data, history]);

  console.log(data);
  return (
    <h1>iFoods</h1>
  );
}

export default Foods;
