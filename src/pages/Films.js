import React, { useState, useEffect } from 'react'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import treilers from '../lists/trailers'
import { getUrlId, formatDate } from '../utils/utils'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import LocalMoviesOutlined from '@material-ui/icons/LocalMoviesOutlined'
import HelpOutlineOutlined from '@material-ui/icons/HelpOutlineOutlined'
import Typography from '@material-ui/core/Typography'
import ModalVideo from 'react-modal-video'
import FilmsService from '../services/FilmsService'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%'
    }
}))

export default function Films() {
    const classes = useStyles()
    const theme = useTheme()
    const [films, setFilms] = useState(null)
    const [trailerOpen, setTrailerOpen] = useState(false)
    const [trailerMovieId, setTrailerMovieId] = useState('')
    const filmsService = new FilmsService()

    const listFilms = () => {
        try {
            filmsService.list(
                (success) => {
                    const content = success.results

                    setFilms(content)
                }, (error) => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
    }

    const openTreilerModal = (id) => {
        setTrailerMovieId(treilers.find(x => x.id === id).youtube_id)
        setTrailerOpen(true)
    }

    useEffect(() => {
        listFilms()
    }, [])

    return (
        <div>
            {films ?
                films.map((prop, key) => (
                    <Card className={classes.root} key={key}>
                        <Grid container>
                            <Grid item xs={12} sm={2} align='center'>
                                <img
                                    className={classes.cover}
                                    src={`/static/images/films/${getUrlId(prop.url)}.jpg`}
                                />
                            </Grid>
                            <Grid item xs={12} sm container>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography component='h5' variant='h5'>
                                            {prop.title} ({formatDate(prop.release_date)})
                                </Typography>
                                        <Typography variant='subtitle1' color='textSecondary'>
                                            {prop.director} (director)
                                </Typography>
                                        <Typography variant='body2' color='textSecondary' component='p' align='justify'>
                                            {prop.opening_crawl}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button
                                            startIcon={<LocalMoviesOutlined />}
                                            onClick={() => openTreilerModal(prop.episode_id)}
                                            variant='outlined'
                                            size='small'
                                            color='primary'>
                                            Trailer
                                </Button>
                                        <Button
                                            startIcon={<HelpOutlineOutlined />}
                                            variant='contained'
                                            href={`/films/${getUrlId(prop.url)}`}
                                            size='small'
                                            color='secondary'>
                                            Informações
                                </Button>
                                    </CardActions>
                                </div>
                            </Grid>
                            <ModalVideo channel='youtube' isOpen={trailerOpen} videoId={trailerMovieId} onClose={() => setTrailerOpen(false)} />
                        </Grid>
                    </Card>
                ))
                : ''}
        </div>
    )
}