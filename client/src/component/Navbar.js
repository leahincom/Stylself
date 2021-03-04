import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isAuthenticated }) {
  return (
    <div className='navbar' align='center'>
      {/* logo */}
      <a href='/'>
        <h1>Stylself</h1>
      </a>

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
              <Link to='login'>Login</Link>
            </li>
          </React.Fragment>
        )
      }
      </ul>
    </div>
  )
}