import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLinkWrapper } from 'gatsby'
import classnames from 'classnames'

// import { Link } from 'dnb-ui-lib/elements'

export default function GatsbyLink({ className, ...props }) {
  return (
    <GatsbyLinkWrapper
      className={classnames('dnb-anchor', className)}
      {...props}
    />
  )
}
GatsbyLink.propTypes = {
  className: PropTypes.string
}
GatsbyLink.defaultProps = {
  className: null
}
