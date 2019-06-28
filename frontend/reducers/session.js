//now that we have our actions, we need to make a slice of state to store them

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session';

//first, setup default state for session
//returned if no current user
const _nullSession = {
    currentUser: null
};

//it knows this is session reducer
export default (state = _nullSession, action ) => {
  Object.freeze(state);
  switch(action.type) {
      case RECEIVE_CURRENT_USER:
          return Object.assign({}, { current_user: action.user }); //copy of new state with curent user key (based on _nullSession)
      case LOGOUT_CURRENT_USER:
          return _nullSession; //no user resets the _null_session
    default:
        return state;
  }
}