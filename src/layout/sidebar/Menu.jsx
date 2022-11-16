import React from 'react'
import {Link} from 'react-router-dom'
import style from './style.module.css'
import {motion} from 'framer-motion/dist/es/index'


function Menu() {



  return (
    <aside>
      <motion.nav animate={{opacity:1, marginTop: 0}} initial={{opacity:0, marginTop:-100}} exit={{opacity:0, margintop:-100}} className={style.mobileNav}>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/aboutus'>About Us</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contactus' className={style.contact}>Contact Us</Link>
        </motion.nav>
    </aside>
  )
}

export default Menu