import React from 'react'
import style from './style.module.css'
import Watch from '../../components/buttons/Watch'
export default function Section3() {
  return (
    <section className={style.section3}>
        <div id='container' className={style.section3box}>
            <div>
                <small>New Project</small>
                <h2>Alpha Court</h2>
                <p>Amazing set of luxury homes for you!</p>
                <Watch/>
            </div>
            <div className={style.video}>
                <iframe src="https://www.youtube.com/embed/vngXI_x50dc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </section>
  )
}
