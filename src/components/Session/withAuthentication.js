import React from 'react';
import { connect } from 'react-redux';
import { authActions } from '../../constants/actions'

import { firebase } from '../../firebase';

const withAuthentication = (Component) => {
	class WithAuthentication extends React.Component {
		componentDidMount() {
			const { onSetAuthUser } = this.props;

			firebase.auth.onAuthStateChanged(authUser => {
				authUser
					? onSetAuthUser(authUser)
					: onSetAuthUser(null);
			});
		}

		render() {
			return (
				<Component />
			);
		}
	}

	const mapDispatchToProps = (dispatch) => ({
		onSetAuthUser: (authUser) => dispatch({ type: authActions.authUserSet, authUser }),
	});

	return connect(null, mapDispatchToProps)(WithAuthentication);
}

export default withAuthentication;
