import {
    COMMUNITY_NAME_CHANGE,
    COMMUNITY_EMAIL_CHANGE,
    COMMUNITY_COLLEGE_CHANGE,
    COMMUNITY_TECH_CHANGE
} from '../action.type'

const initialState = {
    name: '',
    email: '',
    college: '',
    tech: ''
}


export default (state = initialState, action) => {
    switch (action.type) {
        case COMMUNITY_NAME_CHANGE:
            return {
                ...state,
                name: action.payload
            }
        case COMMUNITY_EMAIL_CHANGE:
            return {
                ...state,
                email: action.payload
            }
        case COMMUNITY_COLLEGE_CHANGE:
            return {
                ...state,
                college: action.payload
            }
        case COMMUNITY_TECH_CHANGE: {
            return {
                ...state,
                tech: action.payload
            }
        }
        default:
            return state
    }
}