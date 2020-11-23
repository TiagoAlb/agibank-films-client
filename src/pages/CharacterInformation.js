import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import { makeStyles } from '@material-ui/core/styles'
import { getUrlId } from '../utils/utils'
import AccessibilityOutlined from '@material-ui/icons/AccessibilityOutlined'
import FaceOutlined from '@material-ui/icons/FaceOutlined'
import HeightOutlined from '@material-ui/icons/HeightOutlined'
import ColorLensOutlined from '@material-ui/icons/ColorLensOutlined'
import VisibilityOutlined from '@material-ui/icons/VisibilityOutlined'
import WcOutlined from '@material-ui/icons/WcOutlined'
import EventOutlined from '@material-ui/icons/EventOutlined'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import PeopleService from '../services/PeopleService'

const peopleService = new PeopleService()

export default function Films(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            marginBottom: theme.spacing(2)
        },
        gridList: {
            flexWrap: 'nowrap',
            display: 'flex',
            transform: 'translateZ(0)',
            height: 200,
            maxWidth: props.isMobile ? 260 : 450,
            overflow: 'auto'
        },
        divImage: {
            maxWidth: '100%'
        },
        content: {
            flex: '1 0 auto',
        },
        avatar: {
            display: 'block',
            width: theme.spacing(20),
            height: theme.spacing(20),
        },
        cover: {
            height: '100%',
            width: 'auto',
            marginRight: theme.spacing(0.5)
        },
        divAvatar: {
            padding: theme.spacing(4)
        },
        icon: {
            verticalAlign: 'middle'
        }
    }))

    const classes = useStyles()
    const { idCharacter } = useParams()
    const [character, setCharacter] = useState(null)

    useEffect(() => {
        const getCharacter = () => {
            peopleService.get(idCharacter,
                (success) => {
                    setCharacter(success)
                }, (error) => {
                    console.log(error)
                })
        }

        getCharacter()
    }, [idCharacter])

    return (
        <div>
            {character ?
                <Card className={classes.root}>
                    <Grid container>
                        <Grid item xs={12} sm align='center'>
                            <div className={classes.divAvatar}>
                                <Avatar
                                    alt='Character'
                                    src={`/static/images/avatars/characters/${idCharacter}.jpg`}
                                    className={classes.avatar}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={9} container>
                            <CardContent className={classes.content}>
                                <Typography component='h5' variant='h5'>
                                    {character.name}
                                </Typography>
                                <br />
                                <Grid item container>
                                    <Grid item sm={4}>
                                        <Typography variant='subtitle1' color='textSecondary'>
                                            <AccessibilityOutlined className={classes.icon} /> Mass: {character.mass}
                                        </Typography>
                                        <Typography variant='subtitle1' color='textSecondary' component='p' align='justify'>
                                            <HeightOutlined className={classes.icon} /> Height: {character.height}
                                        </Typography>
                                        <Typography variant='subtitle1' color='textSecondary' component='p' align='justify'>
                                            <FaceOutlined className={classes.icon} /> Hair Color: {character.hair_color}
                                        </Typography>
                                        <Typography variant='subtitle1' color='textSecondary' component='p' align='justify'>
                                            <ColorLensOutlined className={classes.icon} /> Skin Color: {character.skin_color}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm>
                                        <Typography variant='subtitle1' color='textSecondary' component='p' align='justify'>
                                            <VisibilityOutlined className={classes.icon} /> Eye Color: {character.eye_color}
                                        </Typography>
                                        <Typography variant='subtitle1' color='textSecondary' component='p' align='justify'>
                                            <EventOutlined className={classes.icon} /> Birth Year: {character.birth_year}
                                        </Typography>
                                        <Typography variant='subtitle1' color='textSecondary' component='p' align='justify'>
                                            <WcOutlined className={classes.icon} /> Gender: {character.gender}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid item xs={12}>
                                    <Typography variant='h6' component='h6' align='justify'>
                                        Films
                                    </Typography>
                                    <div className={classes.gridList}>
                                        {character.films.map((prop) => (
                                            <NavLink key={prop} className={classes.cover} to={`/films/${getUrlId(prop)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img
                                                    className={classes.cover}
                                                    src={`/static/images/films/${getUrlId(prop)}.jpg`}
                                                    alt={prop}
                                                />
                                            </NavLink>
                                        ))}
                                    </div>
                                </Grid>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
                : ''
            }
        </div >
    )
}