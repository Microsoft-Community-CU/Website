import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// importing reducers
import ui from './reducers/ui'
import coreTeamForm from './reducers/core.team.form'
import communityForm from './reducers/community'

const store = createStore(combineReducers({
    ui,
    coreTeamForm,
    communityForm
}), applyMiddleware(thunk))

export default store