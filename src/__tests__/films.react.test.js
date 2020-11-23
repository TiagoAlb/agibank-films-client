import React from 'react'
import renderer from 'react-test-renderer'
import Films from '../pages/Films'

it('renders correctly', () => {
    const tree = renderer
        .create(<Films />)
        .toJSON()
    expect(tree).toMatchSnapshot()
})