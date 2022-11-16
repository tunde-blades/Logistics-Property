import React from 'react'
import style from './style.module.css'
import homepage from '../../assets/images/homepage.png'
import Button from '../../components/buttons/Button'

export default function Section1() {
  return (
    <div>
      <section className={style.section1}>
        <header className={style.header}>
          <div id='container' className={style.headcontent}>
            <h2>Getting your dream house just got a lot easier.</h2>
            <p>At the centre of what we do is ensuring you are led to the right home</p>
            <Button>Let's go</Button>
            <div className={style.rating}>
              <div className={style.rate}>
                <span className={style.num}>+110</span><span>Property sold</span>
              </div>
              <div className={style.rate}>
                <span className={style.num}>70</span><span>satisfied client</span>
                </div>
            </div>
          </div>
          <picture className={style.imagebox}>
            <img src={homepage} alt="" />
            <div className={style.imagdesign}></div>
          </picture>
          
        </header>
      </section>
    </div>
  )
}