/**
 * Layout is include in every page
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import LayoutWrapper from './LayoutWrapper'

// This polyfill is only needed if we use Styled Components (CSS-in-JS) syntax
import cssVars from 'css-vars-ponyfill'
cssVars()

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => <LayoutWrapper>{children}</LayoutWrapper>}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
