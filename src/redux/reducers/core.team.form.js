import {
    CORE_TEAM_NAME_CHANGE
} from '../action.type'

const initialState = {
    name: '',
    position: '',
    email: '',
    githubId: '',
    linkedinIn: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case CORE_TEAM_NAME_CHANGE:
            return {
                ...state,
                name: action.payload
            }

        default:
            return state
    }
}