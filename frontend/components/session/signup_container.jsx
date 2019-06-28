import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session'; //grabbing the thunk from the action
import Signup from './signup';


//does not repy on any part of state to make a new userstate, so we don't need MSP

const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
});

export default connect(null, mapDispatchToProps)(Signup);
//now we can call the props in the signup container