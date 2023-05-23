import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about__container'>
      <div className='about__section'>
        <div className='about__section__container'>
          <h1 className='about__section__title'>
            Subscribe To Our Newsletter
          </h1>
          <form className='about__section__form' action="">
            <input className='about__section__form__input' type="email" name="" id="" placeholder="Enter your email..."/>
            <button className='about__section__form__button' type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
        <article className='about__article'>
          <h1 className='about__article__title'>
            About Us
          </h1>
          <p className='about__article__p'>
            DonP-Foods is a household, stomach-satisfying business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.
          </p>
          <Link to='/contact'>
            <button className='about__button'>
              Contact Us...
            </button>
          </Link>
        </article>
      
    </div>
  )
}

export default About