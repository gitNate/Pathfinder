import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Collapse, Glyphicon } from 'react-bootstrap';

import withAuthorization from '../../Session/withAuthorization'
import { db } from '../../../firebase'
import NewCharacterForm from '../../forms/NewCharacterForm'

const styles = {
	divStyle : {
		verticalAlign: 'middle',
		height: 51,
	},
	addButton : {
		float: 'right',
		verticalAlign: 'middle',
	}
}

const updateByPropertyName = (propertyName, value) => () => (
	{ [propertyName]: value, }
)

const INITIAL_STATE = {
	showCreateCharacterForm: false,
};

class MyCharactersPage extends Component {
	constructor(props) {
		super(props)
		this.state = { ...INITIAL_STATE }
	}

    componentDidMount() {
	}

	render() {
		const { characters } = this.props
		const { showCreateCharacterForm } = this.state
		console.log('characters', characters)
		console.log('showCreateCharacterForm', showCreateCharacterForm)

		return (
			<div>
				<h1 style={styles.divStyle}>
					My Character List
					<button
						type="button"
						className="btn btn-success btn-lg addButton"
						style={styles.addButton}
						onClick={() => this.setState({ showCreateCharacterForm: !showCreateCharacterForm})}>
						+
					</button>
				</h1>
				{showCreateCharacterForm && <NewCharacterForm />}
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
	characters: state.characters,
});

const mapDispatchToProps = (dispatch) => ({
	onSetCharacters: (characters) => dispatch({ type: 'CHARACTERS_SET', characters }),
});

const authCondition = (authUser) => !!authUser;

export default compose(
	withAuthorization(authCondition),
	connect(mapStateToProps, mapDispatchToProps)
)(MyCharactersPage);