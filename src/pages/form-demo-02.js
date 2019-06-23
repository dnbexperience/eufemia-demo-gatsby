/**
 * TODO: Make more demos
 *
 */

import React from 'react'

import Layout from '../layout/Layout'
import GatsbyLink from '../layout/GatsbyLink'

import { H1, P } from 'dnb-ui-lib/elements'

const SecondPage = () => (
  <Layout>
    <div align="center">
      <H1>This page is not made yet</H1>
      <P>Sorry.</P>
      <GatsbyLink to="/">Go back to the homepage</GatsbyLink>
    </div>
  </Layout>
)

export default SecondPage
