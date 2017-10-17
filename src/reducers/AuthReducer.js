import { 
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_START
} from '../actions/types';

const INITIAL_STATE = { 
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false // Is not required but best practice 
};

export default (state = INITIAL_STATE, action) => {
  console.log(action); // remove after testing

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload }; // Create new object for Redux comparison

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER_START:
      return { ...state, loading: true, error: '' };
    
    // case LOGIN_USER_SUCCESS:
    //   return { ...state,
    //     user: action.payload,
    //     error: '',
    //     loading: false,
    //     email: '',     // Reset after success instead use INITIAL_STATE
    //     password: ''
    //   };

    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };

    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed ', password: '', loading: false };
    default: 
      return state;
  }
};
