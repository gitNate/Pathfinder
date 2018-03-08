import React, { Component } from 'react'

import PasswordForgetForm from '../../forms/PasswordForgetForm'

class PasswordForgetPage extends Component {
	
	componentDidMount() {
	}

	render() {
		return (
			<div>
				<h1>Reset Your Password</h1>
				<PasswordForgetForm />
			</div>
		)
	}
}

export default PasswordForgetPage
