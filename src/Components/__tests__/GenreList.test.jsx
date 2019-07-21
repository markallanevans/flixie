import React from 'react'
import ReactDOM from 'react-dom'
import GenreList from '../GenreList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GenreList />, div)
  ReactDOM.unmountComponentAtNode(div)
})
