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
import FilmCard from '../components/FilmCard'
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
                    <FilmCard film={prop} key={key} />
                ))
                : ''}
        </div>
    )
}