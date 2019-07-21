import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  left: {
    marginBottom: '8px',
    padding: '8px',
    float: 'left',
    backgroundColor: '#111133',
  },
  right: {
    marginBottom: '8px',
    padding: '8px',
    float: 'right',
    backgroundColor: '#111133',
  },
}

const CaptionDetail = ({ title, content, left }) => (
  <div style={left ? styles.left : styles.right}>
    <strong>{`${title}: `}</strong>
    {content}
  </div>
)

CaptionDetail.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  left: PropTypes.bool,
}

CaptionDetail.defaultProps = {
  left: false,
}

export default CaptionDetail
