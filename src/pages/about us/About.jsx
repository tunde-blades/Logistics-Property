import React from 'react'
import Header from '../../layout/head/Header'
import Footer from '../../layout/footer/Footer'
import style from './style.module.css'
export default function About() {
  return (
    <section>
        <Header/>
        <div className={style.aboutHead}>
          <h2>About Us</h2>
        </div>
        <article id='container' className={style.about}>
          <section>
            <div className={style.headH}>
              <h2 className={style.aboutus}>About Us</h2>
              <p className={style.rule}></p>
            </div>
            <p>
              Property Logistics Co. is a real estate establishment founded and established in Nigeria to provide 
                comprehensive property advisory, development, management services and solutions not only to landlords, 
                prospective homeowners, developers, and investors, but also to the average individuals who intend to 
                make crucial property decisions and investments.
                  <br /><br/>
                We think outside the box. We break down the real estate jargon into layman terms for our clients to better 
                build understanding between both parties. We are responsive and responsible. We work with industry 
                experts to deliver quality services and solutions from residential to commercial properties. In all, we lead 
                our clients to the right homes
            </p>
          </section>
          <section>
            <h3>Our Mission</h3>
            <p>We are here to stay. We are committed to making reliable, strong and secure real estate investments and projects, through world-class services in real estate consultancy, management and development while nurturing long-term client relationships.</p>
          </section>
          <section>
            <h3>Our Vission</h3>
            <p>To become the most-sought-after Real Estate Agency in Nigeria and beyond helping clients meet real estate objectives. </p>
          </section>
          <section>
            <h3>Our Core Values</h3>
            <li>
              <b>Communication:</b> We pledge to make the ‘complex’ simpler for our clients and to walk them down the line to reach their real estate objectives. 
              </li>
              <br />
              <li><b>Integrity:</b> Never will we be two-faced or dubious. We’ll abide by the code of ethics and serve with professionalism, honesty and integrity at their peak.
              </li>
              <br />
              <li><b>Quality:</b> We promise to ensure our clients don’t settle for the wrong houses. We’ll always offer impeccable services to meet mutual benefits.
                </li>
                <br />
                <li><b>Trust:</b> We’ll establish relationships on the foundation of trust and respect. 
                </li>
          </section>
        </article>
        <Footer/>
    </section>
  )
}
