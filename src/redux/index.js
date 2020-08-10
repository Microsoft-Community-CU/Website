import { createStore, combineReducers, applyMiddleware } from 'redux'

// importing reducers
import ui from './reducers/ui'
import coreTeamForm from './reducers/core.team.form'

const store = createStore(combineReducers({
    ui,
    coreTeamForm
}), applyMiddleware())

export default store