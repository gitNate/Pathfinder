import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase'

class MyCharactersPage extends Component {
    componentDidMount() {

	}

	render() {
		const { characters } = this.props
		console.log('characters', characters)

		return (
			<div>
				<h1>My Character List</h1>
				{!!characters && <CharacterList characters={characters} />}
			</div>
		);
	}
}

const CharacterList = ({ characters }) =>
	<div>
		<h2>List of characters</h2>
		{Object.keys(characters).map(key =>
			<div key={key}>{key}</div>
		)}
	</div>

const mapStateToProps = (state) => ({
	characters: state.charactersState.characters,
});

const mapDispatchToProps = (dispatch) => ({

});

const authCondition = (authUser) => !!authUser;

export default compose(
	withAuthorization(authCondition),
	connect(mapStateToProps, mapDispatchToProps)
)(MyCharactersPage);