import {
    CORE_TEAM_NAME_CHANGE,
    CORE_TEAM_POSITION_CHANGE,
    CORE_TEAM_EMAIL_CHANGE,
    CORE_TEAM_GITHUB_CHANGE,
    CORE_TEAM_LINKEDIN_CHANGE
} from '../action.type'
import Airtable from 'airtable'


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

const sybmitForm = (name, email, position, github, linkedin) => {
    return dispactch => {
        let base = new Airtable({
            apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
        }).base(process.env.REACT_APP_BASE_NAME)

        base('Table 1').create([{
            "fields": {
                "Name": name,
                "Position": [position],
                "Email": email,
                "Github Id": github,
                "Linkdin Id": linkedin
            }
        }], (err, records) => {
            if(err){
                console.log(err)
                return;
            }
            
            records.forEach(function (record) {
                console.log(record.getId());
              });
        })
    }
}

export {
    nameHandle,
    positionHandle,
    emailHandle,
    githubHandle,
    linkedinHandle,
    sybmitForm
}