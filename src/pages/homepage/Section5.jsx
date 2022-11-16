import React from 'react'
import style from './style.module.css'
import Contactbtn from '../../components/buttons/Contactbtn'

export default function Section5(){


    return(
        <section id='container' className={style.section5}>
            <h3>Our Services</h3>
            <menu>
                <li className={style.bd}>real estate consultancy and advisory</li>
                <li className={style.bd}>reacltor services</li>
                <li className={style.bd}>property management and logistics</li>
                <li>developer services</li>
            </menu>
            <div className={style.contbtn}>
                <Contactbtn/>
            </div>
        </section>
        
    )
}