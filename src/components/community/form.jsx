import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import {
    nameHandle,
    emailHandle,
    collegeHandle,
    submitForm,
    techHandle
} from '../../redux/actions/community'

import { motion } from 'framer-motion'

import {
    Container,
    Grid,
    FormControl,
    TextField,
    makeStyles,
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
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        props.next();
                                    }
                                }}
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
                            <spa>{props.number}. Your email address where we can reach you. </spa>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                placeholder="Type your answer here"
                                value={props.email}
                                onChange={e => { props.handler(e.target.value) }}
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        props.next();
                                    }
                                }}
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

const College = props => {
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
                            <spa>{props.number}. Name of your college</spa>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                placeholder="Type your answer here"
                                value={props.college}
                                onChange={e => { props.handler(e.target.value) }}
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        props.next();
                                    }
                                }}
                            />
                        </FormControl>

                        {(props.college === '') ? null : <motion.div
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

const Tech = props => {

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
                            <spa>{props.number}. Tell us something about your interest in technology. </spa>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                placeholder="Type your answer here"
                                value={props.tech}
                                onChange={e => { props.handler(e.target.value) }}

                                multiline
                            />
                        </FormControl>

                        {(props.tech === '') ? null : <motion.div
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
                            </Grid>
                        </motion.div>}

                    </Grid>
                </Grid>
            </motion.div>
        </div>
    )
}

const Complete = props => {
    let history = useHistory()

    let complete = () => {


        history.goBack()
    }

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
                            Your Response Had been recorded
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>

                        <Grid container spacing={2}>
                            <Grid item >
                                <Button
                                    style={{ marginTop: '8px' }}
                                    endIcon={<Check />}
                                    variant="contained"
                                    color="primary"
                                    onClick={complete}
                                >
                                    OK
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </motion.div>
        </div>
    )
}


const Form = props => {

    const [state, setState] = React.useState(1)

    const comp = () => {
        switch (state) {
            case 1:
                return <Name number={state} name={props.name} handler={props.nameHandler} next={nextQuestion} />
            case 2:
                return <Email number={state} email={props.email} handler={props.emailHandler} next={nextQuestion} />
            case 3:
                return <College number={state} college={props.college} handler={props.collegeHandler} next={nextQuestion} />
            case 4:
                return <Tech number={state} college={props.tech} handler={props.techHandler} next={nextQuestion} />
            case 5:
                props.submitForm(props.name, props.email, props.college, props.tech)
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
        name: state.communityForm.name,
        email: state.communityForm.email,
        college: state.communityForm.college,
        tech: state.communityForm.tech
    }
}

const mapDispatchToProps = dispatch => {
    return {
        nameHandler: (name) => { dispatch(nameHandle(name)) },
        collegeHandler: (college) => { dispatch(collegeHandle(college)) },
        emailHandler: (email) => { dispatch(emailHandle(email)) },
        techHandler: (tech) => { dispatch(techHandle(tech)) },
        submitForm: (name, email, college, tech) => { dispatch(submitForm(name, email, college, tech)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)