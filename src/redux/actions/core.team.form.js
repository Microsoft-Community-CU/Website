import {
    CORE_TEAM_NAME_CHANGE
} from '../action.type'


const nameHandle = name => {
    return {
        type: CORE_TEAM_NAME_CHANGE,
        payload: name
    }
}

export {
    nameHandle
}