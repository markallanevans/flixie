import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import SortableMovieList from '../SortableMovieList'

const fakeList = [
  {
    id: 1,
    title: "One Coder Flew Over the Cuckoo's Nest",
    voteCount: 1245,
    popularity: 567,
    score: 9.9,
    poster_path: 'image.jpg',
    releaseDate: '2019-05-22',
    overview:
      'A story of how one coder lost his mind trying to read his old code.',
  },
]

describe('<SortableMovieList />', () => {
  it('should render without crashing if no data', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SortableMovieList />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('should render without crashing if data', () => {
    const div = document.createElement('div')
    ReactDOM.render(<SortableMovieList movies={fakeList} loaded />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('matches snapshot with data', () => {
    const tree = renderer
      .create(<SortableMovieList movies={fakeList} loaded />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('matches snapshot without data', () => {
    const tree = renderer.create(<SortableMovieList />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
