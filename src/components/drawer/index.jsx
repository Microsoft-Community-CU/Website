import React from 'react'
import { connect } from 'react-redux'
import {
    toggleDrawer
} from '../../redux/actions/ui'

import {
    Drawer,
    makeStyles
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    drawer: {
        width: 'full'
    }
}))

const CustomDrawer = props => {
    const classes = useStyle()

    return (
        <div>
            <Drawer
                className={classes.drawer}
                anchor='right'
                open={props.drawer}
                onClose={e => { props.toggleDrawer() }}
            >
            </Drawer>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        drawer: state.ui.drawer
    }
}

const mapDispatchToProps = dispath => {
    return {
        toggleDrawer: () => { dispath(toggleDrawer()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)