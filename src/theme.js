import {createMuiTheme} from '@material-ui/core'

//imporing custom fonts 
import {segoe} from './fonts'

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#0078d4',
        },
        secondary: {
            main: '#5c2d91'
        }
    },
    typography: {
        fontFamily: 'segoe, Arial'
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [segoe]
            }
        }
    }
})

export default theme