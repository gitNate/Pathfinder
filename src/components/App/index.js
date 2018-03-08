import React from 'react'
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom'

import AccountPage from '../pages/AccountPage'
import CharacterSheetPage from '../pages/CharacterSheetPage'
import HomePage from '../pages/HomePage'
import LandingPage from '../pages/LandingPage'
import MyCharactersPage from '../pages/MyCharactersPage'
import Navigation from '../Navigation'
import PasswordForgetPage from '../pages/PasswordForgetPage'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'
import withAuthentication from '../Session/withAuthentication'

import * as routes from '../../constants/routes'

import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

const App = () =>
	<Router>
		<div className="app">
			<Navigation />
			<hr />
			<Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
			<Route exact path={routes.CHARACTERSHEET} component={() => <CharacterSheetPage />} />
			<Route exact path={routes.HOME} component={() => <HomePage />} />
			<Route exact path={routes.LANDING} component={() => <LandingPage />} />
			<Route exact path={routes.CHARACTERS} component={() => <MyCharactersPage />} />
			<Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
			<Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
			<Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
				
			<hr />
		</div>
	</Router>

export default withAuthentication(App);