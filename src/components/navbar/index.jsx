import React from 'react'

import {
    AppBar,
    Toolbar,
    makeStyles,
    IconButton
} from '@material-ui/core'

import { Menu } from '@material-ui/icons'

const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },

}))

const Navbar = props => {
    const classes = useStyle()

    return (
        <div className={classes.root}>
            <AppBar color="transparent" elevation="0">
                <Toolbar>
                    <div className={classes.root} />
                    <IconButton>
                        <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar