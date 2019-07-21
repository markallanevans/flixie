import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MovieCard from '../MovieCard'

describe('<MovieCard />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MovieCard />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('matches snapshot', () => {
    const tree = renderer.create(<MovieCard />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
