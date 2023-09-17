export const setLoggedInUser = (user) => {
  return {
    type: 'SET_LOGGED_IN_USER',
    payload: user,
  };
};

export const setJwtToken = (token) => { // Add a new action to set the JWT token in the store
  return {
    type: 'SET_JWT_TOKEN',
    payload: token,
  };
};

export const toggleLoginForm = () => {
  return {
    type: 'TOGGLE_LOGIN_FORM',
  };
};
