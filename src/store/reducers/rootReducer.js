import { combineReducers } from 'redux'

import clientReducer from './client.reducer'
import arrayClientReducer from './arrayClient.reducer'
import cityReducer from './city.reducer'
import arrayCityReducer from './arrayCity.reducer'

const rootReducer = combineReducers({
    clientReducer,
    arrayClientReducer,
    cityReducer,
    arrayCityReducer
})

export default rootReducer

