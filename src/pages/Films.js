import React, { useState, useEffect } from 'react'
import '../../node_modules/react-modal-video/scss/modal-video.scss'
import FilmCard from '../components/FilmCard'
import FilmsService from '../services/FilmsService'

export default function Films() {
    const [films, setFilms] = useState(null)
    const filmsService = new FilmsService()

    const listFilms = () => {
        filmsService.list(
            (success) => {
                const content = success.results
                setFilms(content)
            }, (error) => {
                console.log(error)
            })
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