import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const heroData = [
  {
    id: 1,
    name: 'Icecream',
    desc: 'Chocolate & Vanilla',
    price: '5.25',
    image: '/img/i1.png'
  },
  {
    id: 2,
    name: 'Strawberries',
    desc: 'Fresh Strawberry',
    price: '10.25',
    image: '/img/f1.png'
  },
  {
    id: 3,
    name: 'Chicken Kebab',
    desc: 'Mixed Kebab Plate',
    price: '8.25',
    image: '/img/c3.png'
  },
  {
    id: 4,
    name: 'Fish Sauce',
    desc: 'Mixed Fish Sauce',
    price: '9.25',
    image: '/img/fi1.png'
  },
]

const Home = () => {
  return (
    <section className='home' id='home'>
      <div className='home__content'>
        <div className='home__delivery'>
          <p className='bike__delivery'>Bike Delivery</p>
          <div className='bike__image__div'>
            <img src='/img/delivery.png' alt='Delivery' className='bike__image'/>
          </div>
        </div>
        <p className='text'>The Fastest Restaurant, Catering & Delivery Service in <span className='text__span'>Your City</span></p>
        <p className='info__text'>
        DonP-Foods is a household, stomach-satisfying business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family restaurants, to high-priced luxury establishments.
        </p>
        <Link to='/menu'>
          <button type='button' className='btn'>
            Order Now
          </button>
        </Link>
      </div>
      <div className='home__content__2'>
        <div className='content__2'>
          <img src='/img/heroBg.png' alt='heroBg' className='content__2__image'/>
        </div>
        <div className='content__2__content'>
          {heroData && heroData.map((item) => (
            <div key={item.id} className='right__content'>
              <img src={item.image} alt='Ice-cream' className='image1'/>
              <p className='image1__desc'>{item.name}</p>
              <p className='image1__desc2'>{item.desc}</p>
              <p className='image1__price'>
                <span className='image1__span'>$</span> {item.price}
              </p>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home