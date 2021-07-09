import React from 'react';
import { withRouter } from 'react-router-dom';
//import { Link } from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        //const { email, password } = this.state;
        this.props.history.push('/home');
        console.log(this.state)
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div data-testid='loginBox'>
                
                <span>LOGIN</span>

                <form onSubmit={this.handleSubmit} method="post">
                    <div>
                    <input
                        name='email'
                        type='email'
                        data-testid='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    </div>
                    <div>
                    <input
                        name='password'
                        type='password'
                        data-testid='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />
                    </div>
                    <div>
                    <button type='submit' data-testid='submitButton'> LOGIN </button>
                    </div>
                    <div>
                        <a href="/verification">forgot password?</a>
                    </div>
                    <div>New user?
                    <a href="/signup" data-testid="signupLink">
                        click here
                    </a>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);