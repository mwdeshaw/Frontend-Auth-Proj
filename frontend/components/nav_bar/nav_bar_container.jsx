import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

// Comment this back in after you have built the login functionality

import { logout } from '../../actions/session';

//current user retrieved from the state
const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

//logout action from session
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
