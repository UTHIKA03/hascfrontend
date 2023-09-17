const initialState = {
  loggedInUser: null,
  jwtToken: null, // Add the jwtToken property to the initial state
  isLoginFormOpen: false,
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOGGED_IN_USER':
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case 'SET_JWT_TOKEN': // Add a new action to set the JWT token in the store
       console.log('JWT Token in Reducer:', action.payload);  
       return {
        ...state,
        jwtToken: action.payload,
      };
    case 'TOGGLE_LOGIN_FORM':
      return {
        ...state,
        isLoginFormOpen: !state.isLoginFormOpen,
      };
    default:
      return state;
  }
};
