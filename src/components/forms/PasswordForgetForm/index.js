import React, { Component } from 'react'
import { auth } from '../../../firebase'

const INITIAL_STATE = {
    email: '',
    error: null
}

const updateByPropertyName = (propertyName, value) => () => ({
    [propertyName]: value,
});

class PasswordForgetForm extends Component {    
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE }
    }

    onSubmit = (event) => {
        const { email } = this.state;
        auth.doPasswordReset(email)
            .then(() => {
                this.setState(() => ({ INITIAL_STATE }));
            })
            .catch(error => {
                this.setState(updateByPropertyName('error', error));
            });
        event.preventDefault();
    }

    render() {
        const isInvalid = this.state.email === '';
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    value={this.state.email}
                    onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
                </button>
                {this.state.error && <p>{this.state.error.message}</p>}
            </form>
        );
    }

    
}

export default PasswordForgetForm
