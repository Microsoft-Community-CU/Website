import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// importing reducers
import ui from './reducers/ui'
import coreTeamForm from './reducers/core.team.form'

const store = createStore(combineReducers({
    ui,
    coreTeamForm
}), applyMiddleware(thunk))

export default store