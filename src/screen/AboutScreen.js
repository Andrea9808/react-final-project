import React from 'react'
import '../style/about_screen.scss'
import { valueCards } from '../utils/info'
import image from '../images/bg_about.jpg'
import bg_team from '../images/bg_team.jpg'
import Card from '../components/Card'
import Hero from '../components/Hero'

const AboutScreen = () => {
  return (
    <>
      {/* HERO */}
      <Hero img={image}>
        <section className='container-subtitle'>
          <div className='line'></div>
          <h3 className='subtitle'>
            <q>
              I videogiochi non sono solo un passatempo, ma una porta per infiniti mondi di avventure e storie indimenticabili
            </q>
          </h3>
          <div className='line'></div>
        </section>
      </Hero> 
      {/* SCOPO */}
      <section className='container'>
        <h3 className='scope-title'>Il nostro scopo</h3>
        <div className='row'>
          {
            valueCards.map((card) => (
              <div className='col-12 col-md-4 mb-5'>
                <Card key={card.title} {...card} />
              </div>
            ))
          }
        </div>
      </section>
      {/* TEAM */}
      <section>
         <div className='team' style={{
            backgroundImage: `url(${bg_team})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
         }}>

         </div>
      </section>
    </>
  )
}

export default AboutScreen
