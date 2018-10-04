import React from 'react'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <p>
      Knights of the Raid Table began as a team building exercise that was born
      from a sudden decision to annotate the “Word of the Day” on the office
      whiteboard. The Word of the Day is an atypical word that surfaces
      organically during conversation, meetings, and scrums. For example, the
      word “flaccid”, we’d argue, is not typically a word that is used during
      a conversation about Docker containers. But, if one of our teammates somehow
      “organically” talked about the flaccidity of Docker containers, bam, Word
      of the Day is flaccidity. On the whiteboard it goes.
    </p>
    <p>
      After awhile we decided it might be fun to do an exercise with these words
      that some of us did while in grade school. One teammate starts the exercise
      by writing a sentence with the Word of the Day. The next teammate writes a
      sentence based on the first, the next teammate writes based on the second,
      and so on. Then we thought, let’s make this even more fun and challenging.
      Let’s gather up all the Words of the Day from the week and on Friday pick
      Words of the Day in random order by randomizing the author (name drawing
      from a hat). Instead of writing one sentence we set the rule “At least one
      sentence but no more than one scene”.
    </p>
    <p>
      Thus, we agreed to write a collaborative story where we can all be creative,
      add little challenges to the exercise, and have fun while we’re at it.
    </p>

    <br/>
    <h3>Fan Mail</h3>
    <p>Talk to us! <a style={{ color: 'blue' }}>knightsoftheraidtable@gmail.com</a></p>
    <br/>
  </Layout>
)

export default AboutPage
