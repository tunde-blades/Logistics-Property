import React from 'react'
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'
import logo from '../../assets/images/footerlogo.svg'
import biglogo from '../../assets/images/footerbiglogo.svg'
import style from './style.module.css'
export default function Footer() {
  return (
    <footer className={style.footer}>
        <section id='container'>
            <menu>
                <ul>
                    <h3>Links</h3>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Gallery</li>
                </ul>
                <ul>
                    <h3>Contact</h3>
                    <p tel='+234701713859'>+234701713859</p>
                    <small>propertylogistic@gmail.com</small>
                </ul>
                <ul>
                    <h3>Follow</h3>
                    <ol className={style.follow}>
                        <li> <FaFacebook/> </li>
                        <li> <FaInstagram/> </li>
                        <li> <FaTwitter/> </li>
                        <li> <FaLinkedin/> </li>
                    </ol>
                </ul>
                <div>
                    <h3>Address</h3>
                    <address>14, jimoh street, agbowa ikorodu, <br /> Lagos, Nigeria.</address>
                </div>
                <picture>
                    <img src={logo} alt="" />
                </picture>
                <small>&copy; 2021 Property Logistics Co. All Rights reservered</small>
            </menu>
            <picture className={style.floatlogo}>
                <img src={biglogo} alt=''/>
            </picture>

        </section>
    </footer>
  )
}
