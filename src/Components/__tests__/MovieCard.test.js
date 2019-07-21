import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import MovieCard from '../MovieCard'

const fakeMovie = {
  id: 1,
  title: "One Coder Flew Over the Cuckoo's Nest",
  voteCount: 1245,
  popularity: 567,
  score: 9.9,
  poster_ath: 'image.jpg',
  releaseDate: '2019-05-22',
  overview:
    'A story of how one coder lost his mind trying to read his old code.',
}

describe('<MovieCard />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<MovieCard movie={fakeMovie} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('matches snapshot', () => {
    const {
      id,
      title,
      voteCount,
      popularity,
      score,
      posterPath,
      releaseDate,
    } = fakeMovie
    const tree = renderer.create(<MovieCard movie={fakeMovie} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
