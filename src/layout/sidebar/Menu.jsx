import React from 'react'
import {Link} from 'react-router-dom'
import style from './style.module.css'


function Menu() {



  return (
    <aside>
      <nav className={style.mobileNav}>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/aboutus'>About Us</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contactus' className={style.contact}>Contact Us</Link>
        </nav>
    </aside>
  )
}

export default Menu