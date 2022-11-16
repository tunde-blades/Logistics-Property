import React from 'react'
import Header from '../../layout/head/Header'
import Footer from '../../layout/footer/Footer'
import style from './style.module.css'
import image2 from '../../assets/images/gallery2.png'
import image3 from '../../assets/images/gallery3.png'
import image4 from '../../assets/images/gallery4.png'
import image5 from '../../assets/images/gallery5.png'
import image6 from '../../assets/images/gallery6.png'


export default function Gallery() {
  return (
    <section>
        <Header/>
        <div className={style.galleryhead}>
          <h2>Gallery</h2>
        </div>
        <picture id='container' className={style.gallery}>
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
            <img src={image5} alt="" />
            <img src={image6} alt="" />
        </picture>
        <Footer/>
    </section>
  )
}
