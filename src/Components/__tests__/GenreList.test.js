import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import GenreList from '../GenreList'

describe('<GenreList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GenreList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('matches snapshot', () => {
    const tree = renderer.create(<GenreList />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
