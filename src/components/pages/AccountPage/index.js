import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import PasswordChangeForm from '../../forms/PasswordChangeForm';
import withAuthorization from '../../Session/withAuthorization';
import authCondition from '../../Session/authCondition';

class AccountPage extends Component {
	componentDidMount() {
	}

	render() {
		const { userEmail, userName } = this.props
		console.log('AccountPage', this.props)
		return (
			<div>
				<h1>Account:</h1>
				<div className="form-group">
					<label className="control-label col-sm-2">Email:</label>
					<div>
						<p>{userEmail}</p>
					</div>
				</div>
				<div className="form-group">
					<label>Name:</label>
					<input type="text" className="form-control" id="name">{userName}</input>
				</div>
				<PasswordChangeForm />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	userName: state.userState.username,
	userEmail: state.userState.email,
})

export default compose(
	withAuthorization(authCondition),
	connect(mapStateToProps)
)(AccountPage)
