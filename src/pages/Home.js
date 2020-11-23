import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import LinkedInCard from '../components/LinkedInCard'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
}))

export default function Home() {
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Seja bem-vindo!
                </Typography>
                <LinkedInCard />
            </div>
        </Container>
    )
}