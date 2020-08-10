import React from 'react'
import { connect } from 'react-redux'
import {
    nameHandle
} from '../../redux/actions/core.team.form'
import { motion } from 'framer-motion'

import {
    Container,
    Grid,
    FormControl,
    TextField,
    makeStyles,
    Select,
    MenuItem,
    Button,
    Typography,
    Icon
} from '@material-ui/core'

import {
    Check,
} from '@material-ui/icons'


const useStyle = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(4, 8)
    }
}))

const Name = props => {

    return (
        <div>
            <Grid container spacing={5}>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        <spa>{props.number}. Can we get your full name</spa>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            placeholder="Type your answer here"
                            value={props.name}
                            onChange={e => { props.handler(e.target.value) }}
                        />
                    </FormControl>

                    {(props.name === '') ? null : <motion.div
                    initial={{y: 20}}
                    animate={{y: 0}}
                    transition={{ease: "easeOut"}}
                    >
                        <Grid container spacing={2}>
                            <Grid item >
                                <Button
                                    style={{ marginTop: '8px' }}
                                    endIcon={<Check />}
                                    variant="contained"
                                    color="primary"
                                >
                                    OK
                                </Button>
                            </Grid>
                            <Grid item >
                                <Typography style={{ marginTop: '14px', fontSize: '12px' }}>
                                    press Enter
                                </Typography>
                            </Grid>
                        </Grid>
                    </motion.div>}


                </Grid>
            </Grid>
        </div>
    )
}

const Email = props => {

    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                variant="outlined"
                                label="Email"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const Github = props => {

    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                variant="outlined"
                                label="Github Id"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const Linkedin = props => {
    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                variant="outlined"
                                label="Linkedin Id"
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const Position = props => {

    return (
        <div>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <Select
                                variant="outlined"

                            >
                                <MenuItem value={1}>Content Writer</MenuItem>
                                <MenuItem value={2}>Social media marketing</MenuItem>
                                <MenuItem value={3}>Graphic designer</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const Index = props => {

    const classes = useStyle()

    const [state, setState] = React.useState(1)

    const comp = () => {
        switch (state) {
            case 1:
                return <Name number={state} name={props.name} handler={props.nameHandler} />
        }
    }

    return (
        <div>
            {comp()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.coreTeamForm.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nameHandler: (name) => { dispatch(nameHandle(name)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)