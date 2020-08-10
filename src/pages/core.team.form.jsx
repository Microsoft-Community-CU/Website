import React from 'react'

import {
    makeStyles
} from '@material-ui/core'

import Form from '../components/coreteam/forms'

const useStyle = makeStyles(theme => ({
    root: {
        top: '30%',
        left: '20%',
        position: "absolute",
        width: '60%'
    }
}))

const CoreForm = props => {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <div>
                <Form />
            </div>
        </div>
    )
}

export default CoreForm