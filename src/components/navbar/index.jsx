import React from 'react'
import {connect} from 'react-redux'
import {
    toggleDrawer
} from '../../redux/actions/ui'

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
            <AppBar color="transparent" elevation="0" position="sticky">
                <Toolbar>
                    <div className={classes.root} />
                    {/* <IconButton
                    onClick={props.toggleDrawer}
                    >
                        <Menu />
                    </IconButton> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        toggleDrawer: () => {dispatch(toggleDrawer())}
    }
}

export default connect(null, mapDispatchToProps)(Navbar)