import React from 'react'
import { connect } from 'react-redux'
import {
    nameHandle,
    positionHandle,
    emailHandle,
    githubHandle,
    linkedinHandle
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
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{ ease: "easeOut" }}
                    >
                        <Grid container spacing={2}>
                            <Grid item >
                                <Button
                                    style={{ marginTop: '8px' }}
                                    endIcon={<Check />}
                                    variant="contained"
                                    color="primary"
                                    onClick={props.next}
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
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            <spa>{props.number}. Enter your email</spa>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                placeholder="Type your answer here"
                                value={props.email}
                                onChange={e => { props.handler(e.target.value) }}
                            />
                        </FormControl>

                        {(props.email === '') ? null : <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            transition={{ ease: "easeOut" }}
                        >
                            <Grid container spacing={2}>
                                <Grid item >
                                    <Button
                                        style={{ marginTop: '8px' }}
                                        endIcon={<Check />}
                                        variant="contained"
                                        color="primary"
                                        onClick={props.next}
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
            </Container>
        </div>
    )
}

const Github = props => {

    return (
        <div>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            <spa>{props.number}. Enter your Github Profile</spa>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                placeholder="Type your answer here"
                                value={props.github}
                                onChange={e => { props.handler(e.target.value) }}
                            />
                        </FormControl>

                        {(props.github === '') ? null : <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            transition={{ ease: "easeOut" }}
                        >
                            <Grid container spacing={2}>
                                <Grid item >
                                    <Button
                                        style={{ marginTop: '8px' }}
                                        endIcon={<Check />}
                                        variant="contained"
                                        color="primary"
                                        onClick={props.next}
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
            </Container>
        </div>
    )
}

const Linkedin = props => {
    return (
        <div>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            <spa>{props.number}. Enter your Linkedin Profile</spa>
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                placeholder="Type your answer here"
                                value={props.linkedin}
                                onChange={e => { props.handler(e.target.value) }}
                            />
                        </FormControl>

                        {(props.linkedin === '') ? null : <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            transition={{ ease: "easeOut" }}
                        >
                            <Grid container spacing={2}>
                                <Grid item >
                                    <Button
                                        style={{ marginTop: '8px' }}
                                        endIcon={<Check />}
                                        variant="contained"
                                        color="primary"
                                        onClick={props.next}
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
            </Container>
        </div>
    )
}

const Position = props => {

    return (
        <div>
            <Container>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            <spa>{props.number}. Choose the position you are applying</spa>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <Select
                                value={props.position}
                                onChange={e => {
                                    props.handler(e.target.value)
                                }}
                            >
                                <MenuItem value={1}>Content Writer</MenuItem>
                                <MenuItem value={2}>Social media marketing</MenuItem>
                                <MenuItem value={3}>Graphic designer</MenuItem>
                            </Select>
                        </FormControl>

                        {(props.position === '') ? null : <motion.div
                            initial={{ y: 20 }}
                            animate={{ y: 0 }}
                            transition={{ ease: "easeOut" }}
                        >
                            <Grid container spacing={2}>
                                <Grid item >
                                    <Button
                                        style={{ marginTop: '8px' }}
                                        endIcon={<Check />}
                                        variant="contained"
                                        color="primary"
                                        onClick={props.next}
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
                return <Name number={state} name={props.name} handler={props.nameHandler} next={nextQuestion} />
            case 2:
                return <Position number={state} position={props.position} handler={props.positionHandler} next={nextQuestion} />
            case 3:
                return <Email number={state} email={props.email} handler={props.emailHandler} next={nextQuestion} />
            case 4:
                return <Github number={state} github={props.github} handler={props.githubHandler} next={nextQuestion} />
            case 5:
                return <Linkedin number={state} linkedin={props.linkedin} handler={props.linkedinhandler} next={nextQuestion} />
        }
    }

    const nextQuestion = () => {
        setState(state + 1)
    }

    return (
        <div>
            {comp()}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.coreTeamForm.name,
        position: state.coreTeamForm.position,
        email: state.coreTeamForm.email,
        github: state.coreTeamForm.githubId,
        linkedin: state.coreTeamForm.linkedinId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nameHandler: (name) => { dispatch(nameHandle(name)) },
        positionHandler: (position) => { dispatch(positionHandle(position)) },
        emailHandler: (email) => { dispatch(emailHandle(email)) },
        githubHandler: (github) => { dispatch(githubHandle(github)) },
        linkedinhandler: (linkedin) => { dispatch(linkedinHandle(linkedin)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)