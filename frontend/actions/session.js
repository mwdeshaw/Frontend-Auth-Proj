import {postUser, postSession, deleteSession} from '../utils/session';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

 const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER, //type
    user //payload
});
  

 const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
    //this will pass a message only
});

//these will be used in containers
//exported to containers, they use the same args as the above methods and those in the util
export const createNewUser = formUser => dispatch => (
    postUser(formUser)
        .then(user => dispatch(receiveCurrentUser(user)))
);

export const login = formUser => dispatch => (
    postSession(formUser)
        .then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
    deleteSession()
        .then(() => dispatch(logoutCurrentUser()))
);

