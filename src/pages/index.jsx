import React from 'react'
import { motion } from 'framer-motion'
import { useHistory } from 'react-router-dom'
import Tada from 'react-reveal/Tada';
import Flash from 'react-reveal/Flash';
import { AwesomeButton } from "react-awesome-button";
import Countdown from "react-countdown";
import stylesButton from 'react-awesome-button/src/styles/themes/theme-blue';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import {
    Container,
    makeStyles,
    Typography,
    Grid,
    Divider
} from '@material-ui/core'

// importing images 
import Logo from '../images/logo.svg'
import Aboutus from '../images/about_us.jpg'
import techPhantom from '../images/tech_phantom.svg'
import whatwedo from '../images/whatwedo.jpg'

// custom hooks 
import {useTimer} from '../hooks/timer'

const useStyle = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(12),
        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(16)
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(4)
        }
    },
    mtSmall: {
        marginTop: theme.spacing(2)
    },
    logo: {
        width: '260px',
        [theme.breakpoints.up('lg')]: {
            width: '320px'
        }
    },
    section: {
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(12),

        [theme.breakpoints.up('lg')]: {
            marginTop: theme.spacing(32)
        }
    },
    title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px'
        }
    }
}))


const Index = props => {
    const classes = useStyle()
    const history = useHistory()
    const router = path => {
        history.push(path)
    }
    let time = useTimer()

    return (
        <div className={classes.root}  >
    
            <Container>
                <Grid container spacing={3}>

                    <Grid item xs={12}>

                        <center>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 0,
                                    duration: 1,
                                    ease: 'easeIn'
                                }}
                            >
                                <Tada>
                                    <img src={techPhantom} alt="" />
                                </Tada>
                            </motion.div>
                        </center>

                    </Grid>

                    <Grid item xs={12}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: 1,
                                duration: 1,
                                ease: 'easeIn'
                            }}
                        >
                            <Typography align="center" >
                                <span style={{ color: '#969090', fontFamily: 'Segoe UI' }}> A Techinal Community</span>
                            </Typography>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                delay: 2,
                                duration: 1,
                                ease: 'easeIn'
                            }}
                        >
                            <Typography align="center">
                                <span style={{ color: '#969090', fontFamily: 'Segoe UI' }}> Presented By</span>
                            </Typography>
                        </motion.div>

                    </Grid>

                    <Grid item xs={12}>
                        <Flash>
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 3,
                                    duration: 1,
                                    ease: 'easeOut'
                                }}
                            >
                                <center>

                                    <img src={Logo} alt="" width="225px" />

                                </center>
                            </motion.div>
                        </Flash>

                    </Grid>

                </Grid>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 1,
                        duration: 2,
                        ease: 'easeOut'
                    }}
                >

                    <div className={classes.section} >
                        <Grid container spacing={4}>

                            <Grid item xs={12} style={{ fontFamily: 'Segoe UI',background:'#203a61',marginBottom:'5px'}} >
                                <Typography align="center" variant="h2">
                                    <span style={{ fontFamily: 'Segoe UI',color:'white'}}> About Us👨‍💻</span>
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={6}>
                                <center>
                                    <img src={Aboutus} alt="" width="90%" style={{ borderRadius: '5px' }} />
                                </center>
                            </Grid>
                            <Grid xs={12} sm={6} >
                             
                                <Typography style={{ paddingTop:'12px',paddingBottom:'18px',width:'90%',textAlign:'justify',paddingLeft:'18px',paddingRight:'18px',background:'white', borderRadius: '5px'  }}>
                                    <span style={{ fontFamily: 'Segoe UI', textAlign: 'justify' }}>
                                    With this imagination, we came up with the idea of <h2>Tech Phantoms</h2> Armed with a vision to <i>“make people achieve more”</i>, 
                                    Tech Phantoms is a community in cooperation with <b>Microsoft Learn Student Ambassadors</b>, where we aim at developing a teaching –learning environment 
                                    for everyone who has that charisma for technology. An environment where you can collaborate, share and learn from the experts.
                                    </span>
                                </Typography>

                            </Grid>

                        </Grid>

                    </div>

                    <div className={classes.section}>
                        <Grid container spacing={4}>

                            <Grid item xs={12} style={{ fontFamily: 'Segoe UI',background:'#203a61',marginBottom:'5px'}} >
                                <Typography align="center" variant="h2">
                                    <span style={{ fontFamily: 'Segoe UI',color:'white'}}> What We Do 🙋‍♂️</span>
                                </Typography>
                            </Grid>

                            <Grid xs={12} sm={6}>
                                <center>
                                    <img src={whatwedo} alt="" width="90%" style={{ borderRadius: '5px' }} />
                                </center>
                            </Grid>
                            <Grid xs={12} sm={6} style={{ padding: '4px' }}>
                             
                                <Typography style={{ padding: '5px',textAlign: 'justify',paddingLeft:'18px',paddingRight:'18px',background:'white', borderRadius: '5px' }}>
                                    <span style={{ fontFamily: 'Segoe UI', marginLeft:'4px'}}>
                                    We try to bring innovation into action by providing the best resources to the members as we believe technology
                                     is the best force for innovation. No matter you have technical knowledge or not. <b>Just a zeal to learn is enough.</b>
                                     We aim at bringing diverse ideas together and create an engagement which would challenge and stretch our thinking.
<ul style={{textAlign:'left',background:'#5c2d91',padding:'3px',listStyleType:'none',color:'white',borderRadius:'5px'}}>
     <li style={{background:'#5c2d91',padding:'3px'}}> <b>Self-Improvement:</b> Set of programs that enhance the knowledge of members.
     </li><li style={{background:'#5c2d91',padding:'3px'}}><b>Skill Accelerator:</b> By devising a series of workshops that engage developers and experts to help the developers work upon their sills.
     </li><li style={{background:'#5c2d91',padding:'3px'}}><b>Product Innovation:</b> A product collaboration initiative to let members have hands on experience with technologies.
     </li>
</ul>
We commit to becoming a place where people, passionate about technology, collaborate and aim at enhancing 
their knowledge about the latest developer technologies and use them creatively and ethically.
 And this we aim at doing by series of workshops, events, programs and services which will help the academics and research world. 
                            
                            </span>
                                </Typography>

                            </Grid>

                        </Grid>

                    </div>





                    <div className={classes.section}>



                        <Grid container spacing={2}>

                            <Grid item xs={12} style={{ fontFamily: 'Segoe UI',background:'#203a61'}}>
                                <Typography align="center" variant="h2">
                                    <span style={{ fontFamily: 'Segoe UI',color:'white'}}>Volunteer</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" align="center">
                                    <span style={{ fontFamily: 'Segoe UI', textAlign: 'justify' }}> 
                                    Be a force for good-locally and globally. Being in core team, will help you to network with top professionals from industry and getting nomination for upcoming student ambassasdors.
                                    <br/><br/>We are accepting applications for Core Team <span style={{color:'red'}}> <br/> Deadline for Core Team Applications:<Countdown date={'2020-08-18T13:00:00'} /></span></span>
                                </Typography>

                            </Grid>

                            <Grid item xs={12}>
                                <Typography
                                    variant="h5"
                                    align="center"
                                    color="primary"
                                    onClick={() => { router('/coreform') }}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <AwesomeButton
                                        type="primary">
                                        Apply now
                                </AwesomeButton>
                                </Typography>

                            </Grid>
                        </Grid>
                    </div>

                </motion.div>
             

            </Container>
        </div>
    )
}

export default Index