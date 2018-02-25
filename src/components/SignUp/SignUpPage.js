import React, { Component } from 'react'
import {
	Link,
	withRouter,
} from 'react-router-dom'
import SignUpForm from './SignUpForm'

const SignUpPage = ({ history }) =>
	<div>
		<h1>SignUp</h1>
		<SignUpForm history={history} />
	</div>

export default withRouter(SignUpPage);
