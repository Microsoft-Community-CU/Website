import React from 'react'
import { motion } from 'framer-motion'

import {
    makeStyles
} from '@material-ui/core'

import Form from '../components/community/form'

// importing images
import Logo from '../images/Badge.png'

const useStyle = makeStyles(theme => ({
    root: {
        top: '30%',
        left: '20%',
        position: "absolute",
        width: '60%'
    },
    image: {
        margin: theme.spacing(4, 12),
        width: '125px',
        [theme.breakpoints.down('sm')]: {
            width: '125px',
            margin: theme.spacing(4, 8)
        }
    }
}))

const CoreForm = props => {
    const classes = useStyle()

    return (
        <div >
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
            >
                <img src={Logo} alt="" className={classes.image} />
            </motion.div>
            <div className={classes.root}>

                <Form />
            </div>
        </div>
    )
}

export default CoreForm