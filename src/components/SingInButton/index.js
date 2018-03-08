import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import * as routes from '../../constants/routes'

class SignInButton extends Component {
       
    render(){
        return(
            <button
                type="button" 
                className="btn btn-light"
            >
                <Link to={routes.SIGN_IN}>Sign In</Link>
            </button>
        )
    }
}
	

export default SignInButton
