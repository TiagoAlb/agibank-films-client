import React from 'react';
import renderer from 'react-test-renderer';
import FilmCard from '../src/components/FilmCard';

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
        .toJSON();
    expect(tree).toMatchSnapshot();
});