import React from 'react'
import Header from '../../layout/head/Header'
import Footer from '../../layout/footer/Footer'
import style from './style.module.css'
import Callbtn from '../../components/buttons/Callusbtn'
import Messagebtn from '../../components/buttons/Messagebtn'
import { FaForward, FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
export default function Contact() {
  return (
     <section>
        <Header/>
        <div className={style.contacthead}>
          <h2>Contact Us</h2>
        </div>
        <section id='container' className={style.contact}>
           <h3>Contact Us</h3>
           <menu>
            <ul>
              <li> <small><FaPhoneAlt/> </small><span>+2347017173859</span> </li>
              <li><Callbtn/> </li>
            </ul>
            <ul>
              <li><small><FaForward/> </small><span>propertylogisticsco@gmail.com</span> </li>
              <li><Messagebtn/> </li>
            </ul>
            <div className={style.address}><small><FaLocationArrow/></small> <span>1b, Alh Hussein Sumonu Street, Lagos 105102 Lekki Phase 1 Nigeria</span> </div>
           </menu>
        </section>
        <Footer/>
    </section>
  )
}
