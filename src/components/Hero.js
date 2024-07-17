import React from 'react'
import '../style/hero.scss'
import bg_hero from '../images/bg_hero.jpg'

const Hero = ({children, img, disableOverlay}) => {

    const image = img ? img : bg_hero;


  return (
    <div className='hero-img-container' style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }}> 
        <div className={`${!disableOverlay ? 'hero-overlay' : "" }`}>
            <div className='container'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Hero
