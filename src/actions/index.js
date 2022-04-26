// constants
export const GET_MEAL = 'INFO_USER';

// action creator que lida com as informações do component Login
export const getUser = (email) => ({
  type: GET_MEAL,
  email,
});

// action creator responsável apenas por exibir um loading quando necessrio
export const requestLoading = () => ({
  type: GET_LOADING,
});
