import React from 'react'
import Header from '../../layout/head/Header'
import Footer from '../../layout/footer/Footer'
import style from './style.module.css'
import Callbtn from '../../components/buttons/Callusbtn'
import Messagebtn from '../../components/buttons/Messagebtn'
import {FaPhoneAlt } from 'react-icons/fa'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationPin, faMessage } from '@fortawesome/free-solid-svg-icons'


export default function Contact() {
  return (
     <section>
        <Header/>
        <div className={style.contacthead}>
          <h2>Contact Us</h2>
        </div>
        <section id='container' className={style.contact}>
           <div className={style.headH}>
              <h2>Contact Us</h2>
              <p className={style.rule}></p>
           </div>
           <menu>
            <ul>
              <li> <small><FaPhoneAlt/></small><span>+2347017173859</span> </li>
              <li><Callbtn/> </li>
            </ul>
            <ul>
              <li> <small><FontAwesomeIcon icon={faMessage}/></small> <span>propertylogisticsco@gmail.com</span> </li>
              <li><Messagebtn/> </li>
            </ul>
            <div className={style.address}><small><FontAwesomeIcon icon={faLocationPin}/></small> <span>1b, Alh Hussein Sumonu Street, Lagos 105102 Lekki Phase 1 Nigeria</span> </div>
           </menu>
        </section>
        <Footer/>
    </section>
  )
}
