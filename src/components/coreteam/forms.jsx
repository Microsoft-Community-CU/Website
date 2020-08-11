import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
    nameHandle,
    positionHandle,
    emailHandle,
    githubHandle,
    linkedinHandle,
    sybmitForm
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
            <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut" }}
            >
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
            </motion.div>
        </div>
    )
}

const Email = props => {

    return (
        <div>
            <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut" }}
            >
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
            </motion.div>
        </div>
    )
}

const Github = props => {

    return (
        <div>
            <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut" }}
            >
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
            </motion.div>
        </div>
    )
}

const Linkedin = props => {
    return (
        <div>
            <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut" }}
            >
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
            </motion.div>
        </div>
    )
}

const Position = props => {

    return (
        <div>
            <motion.div
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeOut" }}
            >
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
                                <MenuItem value={4}>Developer</MenuItem>
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
            </motion.div>
        </div>
    )
}

const Complete = props => {

    return <Redirect path="/" />
}

const Index = props => {

    const classes = useStyle()

    const [state, setState] = React.useState(1)

    const postionParser = pos => {
        switch (pos) {
            case 1:
                return 'Content Writer'
            case 2:
                return 'Social media marketing'
            case 3:
                return 'Graphic designer'
            case 4:
                return 'Developer'
        }
    }

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
            case 6:
                let x = postionParser(props.position)
                props.submitForm(props.name, props.email, x, props.github, props.linkedin)
                return <Complete />
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
        linkedinhandler: (linkedin) => { dispatch(linkedinHandle(linkedin)) },
        submitForm: (name, email, position, github, linkedin) => { dispatch(sybmitForm(name, email, position, github, linkedin)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)