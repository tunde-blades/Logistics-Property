import React from 'react'
import Knowmore from '../../components/buttons/Knowmore'
import Learnmore from '../../components/buttons/Learnmore'
import style from './style.module.css'

import image1 from '../../assets/images/homepage2.png'
import image2 from '../../assets/images/homepage3.png'

export default function Section2() {
  return (
    <section id='container' className={style.section2}>
        <article>
            <div className={style.content}>
                <h1>
                    What we are
                </h1>
                <p>
                    If it's not secure, comfortable and premium, then we will not lead you there. We lead you to the right home.
                </p>
                <Knowmore/>
            </div>
            <picture>
                <img src={image1} alt="" />
            </picture>
        </article>
        <article>
            <div className={style.content2}>
                <h1>
                    What we do
                </h1>
                <p>
                    Whether an owner, occupier or aninvestor, we help you achieve your real estate objectives. 

                </p>
                <Learnmore/>
            </div>
            <picture>
                <img src={image2} alt="" />
            </picture>
        </article>
    </section>
  )
}
