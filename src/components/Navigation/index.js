import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import SignOutButton from '../SignOutButton'
import * as routes from '../../constants/routes'

class Navigation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			open: true
		}
	}

	toggleMenu = () => {
		this.setState({ open: !this.state.open })
	}

	render() {
		const { authUser } = this.props
		return (
			<div>
				{authUser
					? <NavigationAuth />
					: <NavigationNonAuth />
				}
			</div>
		)
	}
}

const NavigationAuth = () =>
	<ul className="nav justify-content-end">
		<li className="nav-item">
			<Link className="nav-item nav-link" to={routes.LANDING}>Landing</Link>
		</li>
		<li className="nav-item">
			<Link className="nav-item nav-link" to={routes.HOME}>Home</Link>
		</li>
		<li className="nav-item">
			<Link className="nav-item nav-link" to={routes.CHARACTERS}>Characters</Link>
		</li>
		<li className="nav-item">
			<Link className="nav-item nav-link" to={routes.ACCOUNT}>Account</Link>
		</li>
		<li className="nav-item">
			<SignOutButton />
		</li>
	</ul>

const NavigationNonAuth = () =>
	<div className="navbar-nav">
		<Link className="nav-item nav-link" to={routes.LANDING}>Landing</Link>
		<Link className="nav-item nav-link" to={routes.SIGN_IN}>Sign In</Link>
	</div>

const mapStateToProps = (state) => ({
	authUser: state.sessionState.authUser,
})

export default connect(mapStateToProps)(Navigation);
