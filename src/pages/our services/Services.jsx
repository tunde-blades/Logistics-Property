import React from 'react'
import Header from '../../layout/head/Header'
import Footer from '../../layout/footer/Footer'
import style from './style.module.css'
import {Minus} from '@icon-park/react';


export default function Services() {
  return (
    <section>
        <Header/>
        <div className={style.servicehead}>
          <h2>Services</h2>
        </div>
        <article id='container' className={style.service}>
          <section className={style.sect1}>
           <div className={style.headH}>
              <h2>Services</h2>
              <p className={style.rule}></p>
           </div>
            <p className={style.headP}>We are committed to leading our clients to the right homes and walking them through right decision-making pertaining to their properties.</p>
          </section>
          <section>
            <h3>Real Estate Consultancy and Advisory</h3>
            <p>
              We provide independent and objective advisory and consultancy services tailored to the specific needs of our clients (including property owners, developers, builders, lenders, and investors) on commercial and residential properties. Our advisory services include property valuations and appraisals, market intelligence reports, financial and market analysis, and comprehensive analysis on projects.
              <br /><br/>
              Our team monitors the most recent trends and fluctuations in the real estate industry and feeds our clients with information and reports about the property market as necessary. We help you focus on strategy and growth on your real estate endeavours.
            </p>
          </section>
          <section>
            <h3>Real Estate Development Services</h3>
            <p>We assemble the necessary teams to back up your site and financial resources with core development competency and work side-by-side with you from conceptualization, to securing permits, to construction and delivery and to ultimately execute your retail, residential, leisure, and commercial property visions. We also help in acquiring, renovating, and managing distressed properties profitably.</p>
          </section>
          <section>
            <h3>Property Management and Logistics</h3>
            <p>
              We offer property owners, developers, and investors a full range of property management services. We handle the day‐to‐day needs of your property whilst minimizing vacancies, providing incentives, maximizing your bottom line, and ensuring costs and revenues are properly accounted for.
              <br /><br/>
              We also provide full property maintenance services including cleaning, electrical, painting, carpentry, plumbing & drainage services among others. 
            </p>
          </section>
          <section>
            <h3>Realtor Services</h3>
            <p>
              We are a full-service realtor group that does everything from listing your property up for the right price to marketing and completing negotiations. We complete a thorough Comparative. Market Analysis (CMA) on your property to help you price effectively. We also help our clients put up sensational descriptions (in text, pictures, and video) that get them attractive offers.
                <br /><br/>
                Our team puts together professional knowledge, careful attention to details, a high level of client communication and follow-up to bring about a stress-free, successful and completely transparent real estate transaction for our clients.

            </p>
          </section>
        </article>
        <Footer/>
    </section>
  )
}
