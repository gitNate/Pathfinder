import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import SignUpLink from '../../SignUpLink'
import SignInForm from '../../forms/SignInForm'
import PasswordForgetLink from '../../PasswordForgetLink'

class SignInPage extends Component {
	componentDidMount() {

	}

	render() {
		const { history } = this.props;
		return(
			<div>
				<h1>SignIn</h1>
				<SignInForm history={history} />
				<PasswordForgetLink />
				<SignUpLink />
			</div>
		)
	}
}

export default withRouter(SignInPage)
