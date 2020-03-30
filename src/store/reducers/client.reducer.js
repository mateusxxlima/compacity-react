const STATE_INITIAL = {}

export default function clientReducer(state = STATE_INITIAL, action) {
        
    if (action.type === 'GET_CLIENT') {        
        return action.payload
    }

    if (action.type === 'DEL_CLIENT') {
        return {}
    }

    return state

}
