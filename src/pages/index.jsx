import React from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'
import Tada from 'react-reveal/Tada';
import Flash from 'react-reveal/Flash';
import { AwesomeButton } from "react-awesome-button";
import stylesButton from 'react-awesome-button/src/styles/themes/theme-blue';
import {
    Container,
    makeStyles,
    Typography,
    Grid,
    Divider
} from '@material-ui/core'

// importing images 
import Logo from '../images/logo.svg'
import Aboutus from '../images/about_us.jpg'
import techPhantom from '../images/tech_phantom.svg'

const useStyle = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(12),
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(8)
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(4)
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
        marginTop: theme.spacing(12),
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
        <div className={classes.root}  >
            <Container>
                <Grid container spacing={3}>

                    <Grid item xs={12}>

                        <center>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 0,
                                    duration: 1,
                                    ease: 'easeIn'
                                }}
                            >
                                <Tada>
                                    <img src={techPhantom} alt="" />
                                </Tada>
                            </motion.div>
                        </center>

                    </Grid>

                    <Grid item xs={12}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: 1,
                                duration: 1,
                                ease: 'easeIn'
                            }}
                        >
                            <Typography align="center" >
                                <span style={{ color: '#969090', fontFamily: 'Segoe UI' }}> A Techinal Community</span>
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: 2,
                                duration: 1,
                                ease: 'easeIn'
                            }}
                        >
                            <Typography align="center">
                                <span style={{ color: '#969090', fontFamily: 'Segoe UI' }}> Presented By</span>
                            </Typography>
                        </motion.div>

                    </Grid>

                    <Grid item xs={12}>
                        <Flash>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 3,
                                    duration: 1,
                                    ease: 'easeOut'
                                }}
                            >
                                <center>

                                    <img src={Logo} alt="" width="225px" />

                                </center>
                            </motion.div>
                        </Flash>

                    </Grid>

                </Grid>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 4,
                        duration: 1,
                        ease: 'easeOut'
                    }}
                >

                    <div className={classes.section} >
                        <Grid container spacing={4}>

                            <Grid item xs={12}>
                                <Typography align="left" variant="h2">
                                    <span style={{ fontFamily: 'Segoe UI' }}> About Us</span>
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={6}>
                                <center>
                                    <img src={Aboutus} alt="" width="90%" style={{ borderRadius: '5px' }} />
                                </center>
                            </Grid>
                            <Grid xs={12} sm={6} style={{ padding: '4px' }}>
                                <Typography variant="h5" >
                                    Tech Phantoms
                            </Typography>
                                <Typography style={{ padding: '5px' }}>
                                    <span style={{ fontFamily: 'Segoe UI', textAlign: 'justify' }}>
                                        is powered by <b>Microsoft Learn Student Ambassadors</b> and a group of volunteers.
                                With an objective of making people achieve more, we organize various events, hackathons,
                            </span>
                                </Typography>

                            </Grid>

                        </Grid>

                    </div>



                    <div className={classes.section}>



                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h4" align="center">
                                    <span style={{ fontFamily: 'Segoe UI', textAlign: 'justify' }}> We are accepting applications for Core Team </span>
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
                                    <AwesomeButton
                                        type="primary">
                                        Apply now
                                </AwesomeButton>
                                </Typography>

                            </Grid>
                        </Grid>
                    </div>

                </motion.div>


            </Container>
        </div>
    )
}

export default Index