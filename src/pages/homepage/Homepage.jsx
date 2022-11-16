import React from 'react'
import Footer from '../../layout/footer/Footer'
import Header from '../../layout/head/Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'

export default function Homepage() {
  return (
    <div>
      <Header/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  )
}
