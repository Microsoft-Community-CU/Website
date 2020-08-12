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
        marginTop: theme.spacing(22),
        marginBottom: theme.spacing(12),
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(42)
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
                        <center>
                            <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 1,
                                    duration: 1
                                }}
                            >
                                <img src={Logo} alt="" className={classes.logo} />
                            </motion.div>
                        </center>
                    </Grid>
                    <Grid item xs={12}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: 2,
                                duration: 1
                            }}
                        >
                            <Typography align="center" variant="h6">
                                Presents
                        </Typography>
                        </motion.div>
                    </Grid>
                </Grid>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 3,
                        duration: 1
                    }}
                >
                    <Grid container spacing={1} className={classes.mtSmall}>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h3">
                                Microsoft Community<br />
                                <span style={{ color: 'red' }}>Chandigarh</span> University
                        </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 4,
                                    duration: 1
                                }}
                            >
                                <Typography align="center" variant="h6">
                                    Be a force for good-locally and globally
                        </Typography>
                            </motion.div>
                        </Grid>


                    </Grid>
                </motion.div>



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