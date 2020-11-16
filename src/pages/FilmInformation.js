import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import { makeStyles } from '@material-ui/core/styles'
import treilers from '../lists/trailers'
import { getUrlId } from '../utils/utils'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import LocalMoviesOutlined from '@material-ui/icons/LocalMoviesOutlined'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import Typography from '@material-ui/core/Typography'
import ModalVideo from 'react-modal-video'
import FilmsService from '../services/FilmsService'
import PeopleService from '../services/PeopleService'

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
    },
    avatar: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        cursor: 'pointer'
    },
    avatars: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0.2),
        },
    }
}))

export default function Films() {
    const classes = useStyles()
    const { id } = useParams()
    const [film, setFilm] = useState(null)
    const [producers, setProducers] = useState(null)
    const [trailerOpen, setTrailerOpen] = useState(false)
    const [trailerMovieId, setTrailerMovieId] = useState('')
    const [character, setCharacter] = useState(null)
    const [maxCharacteres, setMaxCharacteres] = useState(6)
    const filmsService = new FilmsService()
    const peopleService = new PeopleService()

    const getFilm = () => {
        try {
            filmsService.get(id,
                (success) => {
                    const producersArray = success.producer.split(',')
                    setProducers(producersArray)
                    setFilm(success)
                    setCharacterExpand()
                }, (error) => {
                    console.log(error)
                })
        } catch (error) {
            console.log(error)
        }
    }

    const setCharacterExpand = () => {
        const openCharacters = document.getElementsByClassName('MuiAvatar-colorDefault')[0]

        if (openCharacters) {
            openCharacters.addEventListener('click', () => { setMaxCharacteres(100) }, false)
            openCharacters.style.cursor = 'pointer'
            openCharacters.title = 'Mostrar todos'
        }
    }

    const getCharacter = (id) => {
        try {
            peopleService.get(id,
                (success) => {
                    setCharacter(success)
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
        getFilm()
    }, [])

    return (
        <div>
            {film ?
                <Card className={classes.root}>
                    <Grid container>
                        <Grid item xs={12} sm={2} align='center'>
                            <img
                                className={classes.cover}
                                src={`/static/images/films/${id}.jpg`}
                                title={film.title}
                            />
                        </Grid>
                        <Grid item xs={12} sm container>
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component='h5' variant='h5'>
                                        {film.title} ({film.release_date})
                                    </Typography>
                                    <Typography variant='subtitle1' color='textSecondary'>
                                        {film.director} (director)
                                    </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p' align='justify'>
                                        {film.opening_crawl}
                                    </Typography>
                                    <br /><br />
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={2}>
                                            <Typography component='subtitle1' variant='subtitle1'>
                                                Producers
                                            </Typography>
                                            <div className={classes.avatars}>
                                                {producers.map((prop) => (
                                                    <a
                                                        href={`https://www.google.com/search?q=${prop}`}
                                                        target='_blank'
                                                        style={{ textDecoration: 'none', color: 'inherit' }}>
                                                        <Avatar
                                                            alt={prop}
                                                            src={`/static/images/avatars/producers/${prop.trim()}.jpg`}
                                                            className={classes.avatar} key={prop}
                                                            title={prop.trim()}
                                                        />
                                                    </a>
                                                ))}
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={10}>
                                            <Typography component='subtitle1' variant='subtitle1'>
                                                Characters
                                            </Typography>
                                            <AvatarGroup max={maxCharacteres}>
                                                {film.characters.map((prop) => (
                                                    <NavLink
                                                        to={`/films/${id}/characters/${getUrlId(prop)}`}
                                                        style={{ textDecoration: 'none', color: 'inherit', border: 'none' }}
                                                        key={prop}>
                                                        <Avatar
                                                            alt={prop}
                                                            onMouseOut={() => { setCharacter(null) }}
                                                            onMouseOver={() => { getCharacter(getUrlId(prop)) }}
                                                            src={`/static/images/avatars/characters/${getUrlId(prop)}.jpg`}
                                                            className={classes.avatar} key={prop}
                                                            title={
                                                                'Clique para informações de '
                                                                + (character ? character.name : '<Carregando...>')
                                                            }
                                                        />
                                                    </NavLink>
                                                ))}
                                            </AvatarGroup>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        startIcon={<LocalMoviesOutlined />}
                                        onClick={() => openTreilerModal(film.episode_id)}
                                        variant='outlined'
                                        size='small'
                                        color='primary'>
                                        Trailer
                                </Button>
                                </CardActions>
                            </div>
                        </Grid>
                        <ModalVideo channel='youtube' isOpen={trailerOpen} videoId={trailerMovieId} onClose={() => setTrailerOpen(false)} />
                    </Grid>
                </Card>
                : ''
            }
        </div >
    )
}