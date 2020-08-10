import React from 'react'

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
                            <img src={Logo} alt="" />
                        </center>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h6">
                            Presents
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={1} className={classes.mtSmall}>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h3">
                            Microsoft Community
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h5">
                           <span style={{color:'red'}}> Chandigarh</span> University
                        </Typography>
                    </Grid><br/>
                    <Grid item xs={12}>
                        <Typography align="center" variant="h5">
                        Be a force for good-locally and globally
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Index