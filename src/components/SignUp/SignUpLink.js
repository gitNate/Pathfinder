import React, { Component } from 'react'
import {
	Link,
	withRouter,
} from 'react-router-dom'
import * as routes from '../../constants/routes'

const SignUpLink = () =>
    <p>
        Don't have an account?
        {' '}
        <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>

export default SignUpLink
