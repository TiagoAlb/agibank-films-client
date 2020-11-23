import React, { useState } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import AppBar from '../components/AppBar'
import Drawer from '../components/Drawer'
import BottomNavigation from '../components/BottomNavigation'
import routes from '../routes/routes'

const isMobile = window.innerWidth <= 800

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        padding: theme.spacing(3),
        marginTop: theme.spacing(8),
        marginBottom: window.innerWidth <= 800 ? 50 : 0
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
}))

export default function Default() {
    const [open, setOpen] = useState(false)
    const classes = useStyles()

    const handleDrawerOpen = () => {
        setOpen(!open)
    }

    return (
        <div className={classes.root}>
            <AppBar handleDrawerOpen={handleDrawerOpen} isMobile={isMobile} />
            {!isMobile ? <Drawer open={open} /> : ''}
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <Switch>
                    {routes.map((prop, key) => {
                        if (prop.redirect)
                            return <Redirect from={prop.path} to={prop.to} key={key} />
                        else return (
                            <Route
                                path={prop.path}
                                key={key}
                                exact={true}
                                render={(props) => <prop.component  {...props}
                                    isMobile={isMobile} />}
                            />
                        )
                    })}
                </Switch>
            </main>
            { isMobile ?
                <BottomNavigation /> : ''}
        </div>
    )
}