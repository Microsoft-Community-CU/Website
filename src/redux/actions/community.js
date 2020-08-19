import {
    COMMUNITY_NAME_CHANGE,
    COMMUNITY_EMAIL_CHANGE,
    COMMUNITY_COLLEGE_CHANGE,
    COMMUNITY_TECH_CHANGE
} from '../action.type'

const nameHandle = name => {
    return {
        type: COMMUNITY_NAME_CHANGE,
        payload: name
    }
}

const emailHandle = email => {
    return {
        type: COMMUNITY_EMAIL_CHANGE,
        payload: email
    }
}

const collegeHandle = college => {
    return {
        type: COMMUNITY_COLLEGE_CHANGE,
        payload: college
    }
}

const techChange = tech => {
    return {
        type: COMMUNITY_TECH_CHANGE,
        payload: tech
    }
}

const sybmitForm = (name, email, college, tech) => {
    return dispactch => {
        let base = new Airtable({
            apiKey: process.env.REACT_APP_AIRTABLE_API_KEY
        }).base(process.env.REACT_APP_BASE_NAME)

        base('Table 2').create([{
            "fields": {
                "Name": name,
                "college": college,
                "email": email,
                "Tech": tech
            }
        }], (err, records) => {
            if (err) {
                console.log(err)
                return;
            }

            records.forEach(function (record) {
                console.log(record.getId());
            });
        })
    }
}