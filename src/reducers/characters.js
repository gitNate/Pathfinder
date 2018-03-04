const INITIAL_STATE = {
    characters: {},
};

const applySetCharacters = (state, action) => ({
    ...state,
    characters: action.characters
});

function charactersReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'CHARACTERS_SET': {
            return applySetCharacters(state, action);
        }
        default: return state;
    }
}

export default charactersReducer;