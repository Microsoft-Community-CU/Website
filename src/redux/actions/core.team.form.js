import {
    CORE_TEAM_NAME_CHANGE,
    CORE_TEAM_POSITION_CHANGE,
    CORE_TEAM_EMAIL_CHANGE,
    CORE_TEAM_GITHUB_CHANGE,
    CORE_TEAM_LINKEDIN_CHANGE
} from '../action.type'


const nameHandle = name => {
    return {
        type: CORE_TEAM_NAME_CHANGE,
        payload: name
    }
}

const positionHandle = position => {
    return {
        type: CORE_TEAM_POSITION_CHANGE,
        payload: position
    }
}

const emailHandle = email => {
    return {
        type: CORE_TEAM_EMAIL_CHANGE,
        payload: email
    }
}

const githubHandle = github => {
    return {
        type: CORE_TEAM_GITHUB_CHANGE,
        payload: github
    }
}

const linkedinHandle = linkedin => {
    return {
        type: CORE_TEAM_LINKEDIN_CHANGE,
        payload: linkedin
    }
}

export {
    nameHandle,
    positionHandle,
    emailHandle,
    githubHandle,
    linkedinHandle
}