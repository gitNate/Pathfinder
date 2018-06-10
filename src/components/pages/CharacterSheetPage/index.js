import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import withAuthorization from '../../Session/withAuthorization';
import authCondition from '../../Session/authCondition';

class CharacterSheetPage extends Component {
	componentDidMount() {
	}
	
	render() {
		return(
			<div>
				<h1>CharacterSheetPage:</h1>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	//authUser: state.sessionState.authUser,
	//loadCharacter Sheet Here
})

export default compose(
	withAuthorization(authCondition),
	connect(mapStateToProps)
)(CharacterSheetPage)
