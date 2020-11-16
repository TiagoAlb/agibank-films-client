import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#63c040'
        },
        secondary: {
            main: '#0473bb'
        },
        background: {
            default: '#303030'
        },
    },
    fontFamily: 'Roboto',
})

export default theme