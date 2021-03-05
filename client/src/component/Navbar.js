import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isAuthenticated }) {
  return (
    <div className='navbar'>

      {/* logo */}
      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <h1>Stylself</h1>
      </Link>

      {/* search */}

      {/* if not logged-in: 
        register
        login */}
      {/* if logged-in:
        my-list
        logout */}
      <ul>
      {
        isAuthenticated ? (
          <React.Fragment>
            <li>
              <Link to='/mylist'>
                <span role='img' aria-label='my-list'>
                  🌈
                </span>
              </Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li>
              <Link to='/register' style={{ textDecoration: 'none', color: 'black' }}>Register</Link>
            </li>
            <li>
              <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
            </li>
          </React.Fragment>
        )
      }
      </ul>
    </div>
  )
}