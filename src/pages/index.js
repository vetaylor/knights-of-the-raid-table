import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>An exiting new adventure awaits...</h1>
    <p>Stay tuned</p>
    <Link to="/page-2/"></Link>
  </Layout>
)

export default IndexPage
