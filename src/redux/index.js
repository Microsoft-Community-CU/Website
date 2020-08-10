import {createStore, combineReducers, applyMiddleware} from 'redux'

// importing reducers
import ui from './reducers/ui'

const store = createStore(combineReducers({
    ui
}), applyMiddleware())

export default store