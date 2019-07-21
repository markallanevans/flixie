import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import CaptionDetail from '../CaptionDetail'

describe('<CaptionDetail />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<CaptionDetail />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
  it('matches snapshot', () => {
    const tree = renderer
      .create(<CaptionDetail title="Rating" content="10.0" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
