import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import PasswordChangeForm from '../../forms/PasswordChangeForm'
import withAuthorization from '../../Session/withAuthorization'

class AccountPage extends Component {
	componentDidMount() {
	}
	
	render() {
		const { authUser } = this.props
		return(
			<div>
				<h1>Account: {authUser.email}</h1>
				<PasswordChangeForm />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	authUser: state.sessionState.authUser,
})

const authCondition = (authUser) => !!authUser

export default compose(
	withAuthorization(authCondition),
	connect(mapStateToProps)
)(AccountPage)
