import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const RulesPage = () => (
  <Layout>
    <h3 style={{ display: 'flex', justifyContent: 'center' }}>The Framework</h3>
    
    <ol>
      <li>This list of rules can be amended by author committee vote.</li>
      <li>Author order shall be chosen at random at the end of the week.</li>
      <li>Author will choose a Word of the Day from the list and provide their
        submission using this word. Variations of the word is permitted such as
        tense.</li>
      <li>Words may not be swapped, bartered for, or otherwise changed.</li>
      <li>All submissions must fit the cannon and current theme agreed upon by
        author committee.</li>
      <li>Characters, Places, and Items may be generated at any time as long as
        it follows the cannon or fits into the world(s).</li>
      <li>If an author cannot meet their deadline notify the team ahead of time
        and it will be worked out by committee. A “guest author” can be deployed
        in these scenarios.</li>
      <li>Chapters should be concluded within approximately three week’s of Words
        of the Day but can be extended if needed; subject to author committee
        approval.</li>
    </ol>

    <Link
      to="/"
      style={{
        display: 'flex',
        fontFamily: 'Vesper Libre',
        fontWeight: '700',
        fontSize: '1.125em',
        justifyContent: 'center',
      }}
      >
        Back
    </Link>
  </Layout>
)

export default RulesPage
