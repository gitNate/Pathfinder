import { authActions } from '../constants/actions'

const INITIAL_STATE = {
    authUser: null,
}

const applySetAuthUser = (state, action) => ({
    ...state,
    authUser: action.authUser
})

function sessionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case authActions.authUserSet: {

            return applySetAuthUser(state, action)
        }
        default: return state
    }
}

export default sessionReducer