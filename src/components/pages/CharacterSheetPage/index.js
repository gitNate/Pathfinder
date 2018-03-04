import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import withAuthorization from '../../Session/withAuthorization'

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

const authCondition = (authUser) => !!authUser

export default compose(
	withAuthorization(authCondition),
	connect(mapStateToProps)
)(CharacterSheetPage)
