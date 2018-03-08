import * as Actions from '../constants/actions'

const INITIAL_STATE = {
    user: {},
};

const setUserAttribute = (state, action) => ({
    ...state, user: action.user
});

function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Actions.userActions.setAttribute: {
            return setUserAttribute(state, action);
        }
        default: return state;
    }
}

export default userReducer;