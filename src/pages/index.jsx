import React from 'react'
import { motion } from 'framer-motion'

import {
    Container,
    makeStyles,
    Typography,
    Grid
} from '@material-ui/core'

// importing images 
import Logo from '../images/logo.svg'

const useStyle = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(22)
    },
    mtSmall: {
        marginTop: theme.spacing(2)
    }
}))


const Index = props => {
    const classes = useStyle()

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
                                <img src={Logo} alt=""/>
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
                                Microsoft Community
                        </Typography>
<<<<<<< HEAD
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h5">
                           <span style={{color:'red'}}> Chandigarh</span> University
                        </Typography>
                    </Grid><br/>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h5">
                        Be a force for good-locally and globally
=======
                        </Grid>
                        <Grid item xs={12}>
                            <Typography align="center" variant="h5">
                                Chandigarh University
>>>>>>> 8e10ddfa5cd822fa2bf8c41bf1d879c07e14880c
                        </Typography>
                        </Grid>
                    </Grid>
                </motion.div>
            </Container>
        </div>
    )
}

export default Index