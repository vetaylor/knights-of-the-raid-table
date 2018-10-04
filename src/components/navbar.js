import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => (
  <div
    style={{
      background: 'black',
      marginBottom: '1.45rem',
    }}
    >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 768,
        display: 'flex',
        justifyContent: 'center',
      }}
      >
      <h4>
        <Link
          to='/'
          style={{
            color: 'white',
            padding: '0 .875rem',
            textDecoration: 'none',
          }}
          >
            Home
        </Link>
        <Link
          to='/about/'
          style={{
            color: 'white',
            padding: '0 .875rem',
            textDecoration: 'none',
          }}
          >
            About
        </Link>
        <Link
          to='/rules/'
          style={{
            color: 'white',
            padding: '0 .875rem',
            textDecoration: 'none',
          }}
          >
            Rules
        </Link>
        <Link
          to='authors/'
          style={{
            color: 'white',
            padding: '0 .875rem',
            textDecoration: 'none',
          }}
          >
            Authors
        </Link>
      </h4>
    </div>
  </div>
)

export default Navbar
