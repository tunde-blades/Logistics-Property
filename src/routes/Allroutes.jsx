import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../pages/about us/About'
import Contact from '../pages/contact us/Contact'
import Gallery from '../pages/gallery/Gallery'
import Homepage from '../pages/homepage/Homepage'
import Services from '../pages/our services/Services'
import style from './style.module.css'

export default function Allroutes() {
  return (
    <div className={style.allSize}>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
      </Routes>
    </div>
  )
}
