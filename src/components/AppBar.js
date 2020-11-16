import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Notifications from '@material-ui/icons/Notifications'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Logo from '../assets/images/Agibank_logo.png'

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#fff',
        color: 'black'
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    logo: {
        flexGrow: 1,
        '& img': {
            verticalAlign: 'middle'
        }
    },

}))

export default function AppBarComponent(props) {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar position='fixed' className={classes.appBar}>
            <Toolbar>
                {!props.isMobile ?
                    <IconButton
                        edge='start'
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='menu'
                        onClick={props.handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton> : ''}
                <div className={classes.logo}>
                    <img src={Logo} width='120' />
                </div>
                <div>
                    <IconButton aria-label="Show notifications" color="inherit">
                        <Badge badgeContent={12} color="primary">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <IconButton
                        aria-label='account of current user'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={handleMenu}
                        color='inherit'
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id='menu-appbar'
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem>Sair</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    )
}