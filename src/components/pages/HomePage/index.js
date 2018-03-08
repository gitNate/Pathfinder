import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from '../../Session/withAuthorization';
import { db } from '../../../firebase'

class HomePage extends Component {
	componentDidMount() {
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
				<p>The Home Page is accessible by every signed in user.</p>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	
});

const mapDispatchToProps = (dispatch) => ({

});

const authCondition = (authUser) => !!authUser;

export default compose(
	withAuthorization(authCondition),
	connect(mapStateToProps, mapDispatchToProps)
)(HomePage);