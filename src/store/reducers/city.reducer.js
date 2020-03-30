const INITIAL_STATE = {}

export default function cityReducer(state = INITIAL_STATE, action) {
    
    if (action.type === 'GET_CITY_BY_NAME') {
        return action.payload
    }

    if (action.type === 'DEL_CITY') {
        return {}
    }

    return state

}