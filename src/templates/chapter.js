import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => {
  const chapter = data.markdownRemark
  return (
    <Layout>
      <div>
        <h2>{chapter.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: chapter.html }}/>
        <br/>
        <div>
          <Link
            to={chapter.frontmatter.prev}
            style={{ float: 'left' }}
            >
            Prev
          </Link>
          <Link
            to={chapter.frontmatter.next}
            style={{ float: 'right' }}
            >
              Next
            </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql `
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        prev
        next
      }
    }
  }
`
