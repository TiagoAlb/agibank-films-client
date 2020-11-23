import React from 'react'
import renderer from 'react-test-renderer'
import FilmCard from '../components/FilmCard'

it('renders correctly', () => {
    const filmObj = {
        title: 'Test',
        episode_id: 5,
        opening_crawl: 'Test',
        director: 'Director Test',
        producer: 'Producer Test',
        release_date: '2020-11-10',
        characters: ['http://swapi.dev/api/people/1'],
        url: 'http://swapi.dev/api/films/1/'
    }

    const tree = renderer
        .create(<FilmCard film={filmObj} />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders correctly with info', () => {
    const filmObj = {
        title: 'Test',
        episode_id: 5,
        opening_crawl: 'Test',
        director: 'Director Test',
        producer: 'Producer Test',
        release_date: '2020-11-10',
        characters: ['http://swapi.dev/api/people/1'],
        url: 'http://swapi.dev/api/films/1/'
    }

    const tree = renderer
        .create(<FilmCard film={filmObj} info />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})


it('renders no movie loaded when no props is informed', () => {
    const tree = renderer
        .create(<FilmCard />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})