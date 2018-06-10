import React, { Component } from 'react'
import { compose } from 'recompose';

import authCondition from '../../Session/authCondition';
import withAuthorization from '../../Session/withAuthorization';

const updateByPropertyName = (propertyName, value) => () => (
	{ [propertyName]: value, }
)

const INITIAL_STATE = {
	characterName: '',
};

class NewCharacterForm extends Component {
	constructor(props) {
		super(props)
		this.state = { ...INITIAL_STATE }
	}

	onSubmit = (event) => {
		const { characterName } = this.state
        console.log("CreateCharacter", characterName)
		event.preventDefault()
	}

	render() {
		const {
			characterName,
		} = this.state

		const isInvalid = (
			characterName === ''
		)

		return (
			<form onSubmit={this.onSubmit}>
                <label
                    htmlFor="characterNameInput"
                >
                    Character Name:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="characterNameInput"
                    placeholder="Character Name"
                    value={characterName}
                    onChange={
                        event => 
                        this.setState(updateByPropertyName('characterName', event.target.value))
                    }
                />
				<button className="btn btn-primary" disabled={isInvalid} type="submit">
					Create Character
        		</button>
			</form>
		)
	}
}

export default compose(
	withAuthorization(authCondition)
)(NewCharacterForm)


