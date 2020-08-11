import {
    CORE_TEAM_NAME_CHANGE,
    CORE_TEAM_POSITION_CHANGE,
    CORE_TEAM_EMAIL_CHANGE,
    CORE_TEAM_GITHUB_CHANGE,
    CORE_TEAM_LINKEDIN_CHANGE
} from '../action.type'

const initialState = {
    name: '',
    position: '',
    email: '',
    githubId: '',
    linkedinId: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case CORE_TEAM_NAME_CHANGE:
            return {
                ...state,
                name: action.payload
            }
        case CORE_TEAM_POSITION_CHANGE:
            return {
                ...state,
                position: action.payload
            }
        case CORE_TEAM_EMAIL_CHANGE:
            return {
                ...state,
                email: action.payload
            }
        case CORE_TEAM_GITHUB_CHANGE:
            return {
                ...state,
                githubId: action.payload
            }
        case CORE_TEAM_LINKEDIN_CHANGE:
            return {
                ...state,
                linkedinId: action.payload
            }

        default:
            return state
    }
}