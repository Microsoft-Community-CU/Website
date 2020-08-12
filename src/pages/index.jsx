import React from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'

import {
    Container,
    makeStyles,
    Typography,
    Grid,
    Divider
} from '@material-ui/core'

// importing images 
import Logo from '../images/logo.svg'
import Aboutus from '../images/about_us.svg'

const useStyle = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(18),
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(32)
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(8)
        }
    },
    mtSmall: {
        marginTop: theme.spacing(2)
    },
    logo: {
        width: '260px',
        [theme.breakpoints.up('lg')]: {
            width: '320px'
        }
    },
    section: {
        marginTop: theme.spacing(32),
        marginBottom: theme.spacing(12),
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(42)
        }
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px'
        }
    }
}))


const Index = props => {
    const classes = useStyle()
    const history = useHistory()
    const router = path => {
        history.push(path)
    }

    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={4}>

                    <Grid item xs={12}>

                        <Typography align="center" variant="h2" className={classes.title} >
                            Microsoft Comunity CU
                        </Typography>

                    </Grid>

                    <Grid item xs={12}>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: 0,
                                duration: 1,
                                ease: 'easeIn'
                            }}
                        >
                            <Typography align="center">
                                Presented by
                        </Typography>
                        </motion.div>

                    </Grid>

                    <Grid item xs={12}>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 1,
                                duration: 1,
                                ease: 'easeOut'
                            }}
                        >
                            <center>
                                <img src={Logo} alt="" width="40%" />
                            </center>
                        </motion.div>

                    </Grid>

                </Grid>

                <div className={classes.section}>
                    <Grid container spacing={4}>

                        <Grid item xs={12}>
                            <Typography align="center" variant="h3">
                                About us
                            </Typography>
                        </Grid> 

                        <Grid xs={12} sm={6}>
                            <img src={Aboutus} alt="" width="100%" />

                        </Grid>
                        <Grid xs={12} sm={6} style={{padding: '4px'}}>
                            <Typography variant="h5" >
                            Microsoft Community-CU 
                            </Typography>
                            <Typography>
                            is powered by Alpha Learn Student ambassadors and a group of volunteers. Our main goal is to make people achieve more.
                            </Typography>

                        </Grid>
                        
                    </Grid>  

                </div>



                <div className={classes.section}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h4" align="center">
                                Core Team Applications Open
                            </Typography>

                        </Grid>

                        <Grid item xs={12}>
                            <Typography
                                variant="h5"
                                align="center"
                                color="primary"
                                onClick={() => { router('/coreform') }}
                                style={{ cursor: 'pointer' }}
                            >
                                Apply now
                            </Typography>

                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    )
}

export default Index