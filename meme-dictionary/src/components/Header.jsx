import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <Link to='/photos' className='header--photoLink'>Photos</Link>
      <input type="text" className="header--input" />
      <img src="./baby.jpg" alt="" className="header--profile-image" />
    </header>
  )
}

export default Header