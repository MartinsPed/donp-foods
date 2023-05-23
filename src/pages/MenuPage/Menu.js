import React, { useEffect, useState } from 'react'
import './Menu.css'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../Firebase'
import { motion } from 'framer-motion'
import FoodBankIcon from '@mui/icons-material/FoodBank';
import Row from '../../sections/Row Container/Row'

const Menu = () => {
  const categories = [
    {
      id: 1,
      name: 'Chicken',
      url: 'chicken'
    },
    {
      id: 2,
      name: 'Curry',
      url: 'curry'
    },
    {
      id: 3,
      name: 'Rice',
      url: 'rice'
    },
    {
      id: 4,
      name: 'Fish',
      url: 'fish'
    },
    {
      id: 5,
      name: 'Fruits',
      url: 'fruits'
    },
    {
      id: 6,
      name: 'Icecreams',
      url: 'icecreams'
    },
    {
      id: 7,
      name: 'Soft Drinks',
      url: 'drinks'
    }
]
const [filter, setFilter] = useState('chicken')
const [filteredDish, setFilteredDish] = useState([])
const getDish = async () => {
  const foodItemsRef = collection(db, 'foodItems')
  const filteredDishQuery = query(foodItemsRef, where ('category', '==', filter))
  const querySnapshot = await getDocs(filteredDishQuery)
  let filtered = []
  querySnapshot.forEach((doc) => {
    filtered.push({id: doc.id, ...doc.data()})
  })
  setFilteredDish(filtered)
}

useEffect(() => {
  getDish()
})
  return (
    <div className='menu__container'>
      <div className='menu__section'>
        <div className='menu__section__container'>
          <h1 className='menu__section__container__title'>
            Subscribe To Our Newsletter
          </h1>
          <form className='menu__section__container__form' action="">
            <input className='menu__section__container__input' type="email" name="" id="" placeholder="Enter your email..."/>
            <button class='menu__section__container__button' type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='menupage__content'>
        <div className='menupage__content__p'>
          For more information on our hot dishes, see our menu item list below:
        </div>
      </div>
      <div className='menu__section__container'>
          <article className='article'>
            <h1 className='article__title__'>
              Our Menu
            </h1>
            <div id='menu' className='menu__'>
      <div className='menu__content__'>
        <div className='menu__content__items__'>
            {categories && categories.map((category) => (
                <motion.div whileTap={{ scale: 0.75}} key={category.id} className='menugroup' style={{background: `${filter === category.url ? 'var(--cartNumBg)' : 'var(--lightgrey)'}`}} onClick={() => setFilter(category.url)}>
                    <div style={{background: `${filter === category.url ? 'var(--white)' : 'var(--cartNumBg)'}`}} className='menugroup__content'>
                        <FoodBankIcon className='menugroup__content__icon'
                        style={{color: `${filter === category.url ? 'var(--textColor)' : 'var(--white)'}`}}/>
                    </div>
                    <p className='menugroup__p' style={{color: `${filter === category.url ? 'var(--white)' : 'var(--textColor)'}`}}>{category.name}</p>
                </motion.div>
            ))}
        </div>

        <div className='menu__contents__'>
            <Row flag={false} data={filteredDish}/>
        </div>
      </div>

    </div>
          </article>
          <aside className='aside'>
            <h3 className='aside__title'>
              Get A Quote
            </h3>
            <form action="">
              <div className='quoteform__content'>
                <label className='quoteform__label'>
                  Name
                </label>
                <input className='quoteform__input' type="text" name="" id="" placeholder="Enter your name..."/>
              </div>
              <div className='quoteform__content'>
                <label className='quoteform__label'>
                  E-mail
                </label>
                <input className='quoteform__input' type="email" name="" id="" placeholder="Enter your email..."/>
              </div>
              <div className='quoteform__content'>
                <label className='quoteform__label'>
                  Message
                </label>
                <textarea className='quoteform__textarea' type="text" name="" id="" cols="30" rows="10" placeholder="Message..."/>
              </div>
              
              <button class="quoteform__button" type="submit">
                Send Message
              </button>
            </form>
          </aside>    
      </div>
      
    </div>
  )
}

export default Menu
