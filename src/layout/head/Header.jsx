import React, {useState} from 'react'
import logo from '../../assets/images/logo.svg'
import {FaBars, FaTimes} from 'react-icons/fa'
import style from './style.module.css'
import { Link } from 'react-router-dom'
import Menu from '../sidebar/Menu'



function Header() {
  const [openMenu, setMenu] = useState(false)

  let displayMenu = ()=>{setMenu(!openMenu)}


  return (
    <header className={style.headcontainer}>
      <div className={style.headbox}>
        <picture className={style.logo}><Link to='/'><img src={logo} alt="" /></Link></picture>
        <div className={style.menu}>
          {openMenu? <h3 onClick={displayMenu}className={style.menu}><FaTimes></FaTimes> </h3>:<h3 onClick={displayMenu} className={style.menu}><FaBars/> </h3>}
          {openMenu && <Menu/>}
        </div>
        
        <nav className={style.tabNav}>
          <Link to='/'>Home</Link>
          <Link to='/services'>Services</Link>
          <Link to='/aboutus'>About Us</Link>
          <Link to='/gallery'>Gallery</Link>
          <Link to='/contactus' className={style.contact}>Contact Us</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header