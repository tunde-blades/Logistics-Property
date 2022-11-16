import React from 'react'
import style from './style.module.css'
import quote from '../../assets/images/quote.svg'

export default function Section4() {
  return (
    <div id='container'>
        <section className={style.section4}>
            <header>
                <h2>Testimonial</h2>
                <span><img src={quote} alt="" /></span>
            </header>
            <menu>
                <li>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, molestias ullam itaque sunt obcaecati minima sapiente dicta velit dignissimos nihil necessitatibus commodi incidunt dolores neque maiores aperiam praesentium vero ducimus?</p>
                    <h4>Ademide Samson</h4>
                    <small>Lagos</small>
                </li>
                <li>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, molestias ullam itaque sunt obcaecati minima sapiente dicta velit dignissimos nihil necessitatibus commodi incidunt dolores neque maiores aperiam praesentium vero ducimus?</p>
                    <h4>Ademide Samson</h4>
                    <small>Russia</small>
                </li>
                <li>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto, molestias ullam itaque sunt obcaecati minima sapiente dicta velit dignissimos nihil necessitatibus commodi incidunt dolores neque maiores aperiam praesentium vero ducimus?</p>
                    <h4>Ademide Samson</h4>
                    <small>United States</small>
                </li>
            </menu>
        </section>
    </div>
  )
}
