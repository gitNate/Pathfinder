import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes';

class PasswordForgetLink extends Component {
    
    render(){
        return(
            <p>
			    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
		    </p>
        )
    }
}

export default PasswordForgetLink
