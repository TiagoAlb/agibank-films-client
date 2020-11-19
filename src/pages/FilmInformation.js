import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import FilmCard from '../components/FilmCard'
import FilmsService from '../services/FilmsService'

export default function Films() {
    const { id } = useParams()
    const [film, setFilm] = useState(null)
    const filmsService = new FilmsService()

    const getFilm = () => {
        filmsService.get(id,
            (success) => {
                setFilm(success)
            }, (error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getFilm()
    }, [])

    return (
        <FilmCard film={film} info />
    )
}