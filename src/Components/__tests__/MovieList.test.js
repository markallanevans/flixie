import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MovieList from '../MovieList'

describe('<MovieList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MovieList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('matches snapshot', () => {
    const tree = renderer.create(<MovieList />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
