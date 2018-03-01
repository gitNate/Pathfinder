import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = ({ authUser }) => 
	<div>
		{authUser
			? <NavigationAuth />
			: <NavigationNonAuth />
		}
	</div>

const NavigationAuth = () =>
	<nav className="nav nav-pills justify-content-end">
		<Link className="nav-item nav-link" to={routes.LANDING}>Landing</Link>
		<Link className="nav-item nav-link" to={routes.HOME}>Home</Link>
		<Link className="nav-item nav-link" to={routes.ACCOUNT}>Account</Link>
		<SignOutButton />
	</nav>

const NavigationNonAuth = () =>
	<nav className="nav nav-pills justify-content-end">
		<Link className="nav-item nav-link" to={routes.LANDING}>Landing</Link>
		<Link className="nav-item nav-link" to={routes.SIGN_IN}>Sign In</Link>
	</nav>

const mapStateToProps = (state) => ({
	authUser: state.sessionState.authUser,
})

export default connect(mapStateToProps)(Navigation);
