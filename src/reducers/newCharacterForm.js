import * as Actions from '../constants/actions'

const INITIAL_STATE = {
    newCharacterForm: {
        name: ''
    },
};

const setFormAttribute = (state, action) => ({
    ...state, newCharacterForm: action.newCharacterForm
});

function newCharacterFormReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Actions.newCharacterForm.reset: {
            return INITIAL_STATE
        }
        case Actions.newCharacterForm.setField: {
            return setFormAttribute(state, action)
        }
        default: return state;
    }
}

export default newCharacterFormReducer;