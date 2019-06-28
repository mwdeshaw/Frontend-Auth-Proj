import { combineReducers } from 'redux';
import entitiesReducer from './entities';
import sessionReducer from './session';

//sessionwill be under the key of session, based on the root file...
export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
});
