import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import SortableMovieList from '../SortableMovieList'

describe('<SortableMovieList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SortableMovieList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches snapshot', () => {
    const tree = renderer.create(<SortableMovieList />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
