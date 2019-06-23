/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Provider from 'dnb-ui-lib/shared/Provider'

// import 'dnb-ui-lib/src/style'
import 'dnb-ui-lib/style/basis'
import 'dnb-ui-lib/style/components'
import 'dnb-ui-lib/style/themes/ui'

// currently, the focus helper is not in use
// import { applyPageFocus } from 'dnb-ui-lib/shared/helpers'

// Optional, use a Provider
export const wrapRootElement = ({ element }) => {
  return <Provider formRow={{}}>{element}</Provider>
}
wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired
}

export const onRouteUpdate = ({ prevLocation }) => {
  // in order to use our own focus management by using applyPageFocus
  // we have to disable the focus management from Reach Router
  // More info: why we have to have the tabindex https://reach.tech/router/accessibility
  // More info: The div is necessary to manage focus https://github.com/reach/router/issues/63#issuecomment-395988602
  try {
    const elem = document.querySelector('div[role="group"][tabindex="-1"]')
    if (elem) {
      elem.removeAttribute('tabindex')
      elem.removeAttribute('role')
    }
  } catch (e) {
    console.log(e)
  }

  // if previous location is not null
  // witch means that this was an page change/switch
  //  then we apply the page content focus for accissibility
  if (prevLocation) {
    // currently, the focus helper is not in use
    //   applyPageFocus('content')
  }
}
