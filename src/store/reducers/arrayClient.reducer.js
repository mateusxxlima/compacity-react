const STATE_INITIAL = []

export default function arrayClientReducer(state = STATE_INITIAL, action) {

    if (action.type === 'GET_ALL_CLIENT') {
        return action.payload
    }

    return state
    
}