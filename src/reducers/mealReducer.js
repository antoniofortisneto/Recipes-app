import { GET_MEAL } from '../actions';

const INITIAL_STATE = {
  meal: '',
};

const meal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_MEAL:
    return {
      ...state,
      meal: action.meal,
    };
  default:
    return state;
  }
};

export default meal;
