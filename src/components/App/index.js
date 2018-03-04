import React from 'react'
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'

import Navigation from '../Navigation'
import LandingPage from '../pages/LandingPage'
import SignUpPage from '../pages/SignUpPage'
import SignInPage from '../pages/SignInPage'
import PasswordForgetPage from '../pages/PasswordForgetPage'
import HomePage from '../pages/HomePage'
import CharacterSheetPage from '../pages/CharacterSheetPage'
import AccountPage from '../pages/AccountPage'
import withAuthentication from '../Session/withAuthentication'
import * as routes from '../../constants/routes'

import './index.css';

const App = () =>
	<Router>
		<div className="app">
			<Navigation />
			<hr />
			<Route exact path={routes.LANDING} component={() => <LandingPage />} />
			<Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
			<Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
			<Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
			<Route exact path={routes.HOME} component={() => <HomePage />} />
			<Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
			<Route exact path={routes.CHARACTERSHEET} component={() => <CharacterSheetPage />} />
			<hr />
		</div>
	</Router>

export default withAuthentication(App);