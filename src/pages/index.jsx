import React from 'react'

import {
    Container,
    makeStyles,
    Typography,
    Grid
} from '@material-ui/core'

// importing images 
import Logo from '../images/logo.png'

const useStyle = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(32)
    }
}))


const Index = props => {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <center>
                            <img src={Logo} alt="logo" width="60%" />
                        </center>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Index