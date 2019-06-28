import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        //we need this here, as it is not bound to the current scope of the singup component instance
        //therefore, it will not work in the form unless we bind it here
        //this is why stuff is bound
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    //this function is a catch-all for modifying the state
    //the type is the action, and by putting it in squasre brakcets
    //evaluation of it before e.target.value is ensured, so this can work for any action
    handleInput(type) {
        return (e) => {
            this.setState( { [type]: e.target.value } )
        }
    };

    handleSubmit(e) {
        e.preventDefault(); //prevents page from refreshing
        this.props.createNewUser(this.state)
        .then( () => this.props.history.push('/chirps')) 
    }
    //if user creation succeeds, using the container method, we will redirect using the new state
    //then is a conditional

    render() {
        return (
            <div className='session-form'>
                <h2>Sign Up!</h2>
                    <form>
                        <label>Username:
                            <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')} //onChanged, we handle input, passing in the string state key
                            />
                        </label>
                        <label>Email:
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            />
                        </label>
                        <label>Password:
                            <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            />
                        </label>
                        <button onClick={this.handleSubmit}>Sign Up</button>
                    </form>
            </div>
        );
    }
};

export default Signup;