import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import SignOutButton from '../SignOutButton'
import * as routes from '../../constants/routes'
import { Collapse } from 'react-bootstrap'

class Navigation extends Component {

	constructor(props) {
		super(props)
		this.state = {
			open: false
		}
	}

	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="navbar-brand" onClick={() => this.setState({ open: !this.state.open})}>RPG App</div>
				<Collapse in={this.state.open} id="navbarNav">
					<div className="collapse-smooth-animation">
					{this.props.authUser
						? <NavigationAuth />
						: <NavigationNonAuth />
					}
					</div>
				</Collapse>
			</nav>
		)
	}
}

const NavigationAuth = () =>
	<ul className="navbar-nav">
		<li className="nav-item active">
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
