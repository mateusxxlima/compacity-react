const INITIAL_STATE = []

export default function arrayCityReducer(state = INITIAL_STATE, action) {

    if (action.type === 'GET_ALL_CITY') {
        return action.payload
    }

    return state

}