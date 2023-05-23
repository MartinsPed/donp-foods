import React, { useEffect, useState } from 'react'
import './Menu.css'
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../Firebase';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { motion } from 'framer-motion';
import Row from '../Row Container/Row';

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
    <div id='menu' className='menu'>
      <div className='menu__content'>
        <p className='menu__content__p'>
            Our Hot Dishes
        </p>
        <div className='menu__content__items'>
            {categories && categories.map((category) => (
                <motion.div whileTap={{ scale: 0.75}} key={category.id} className='group' style={{background: `${filter === category.url ? 'var(--cartNumBg)' : 'var(--lightgrey)'}`}} onClick={() => setFilter(category.url)}>
                    <div style={{background: `${filter === category.url ? 'var(--white)' : 'var(--cartNumBg)'}`}} className='group__content'>
                        <FoodBankIcon className='group__content__icon'
                        style={{color: `${filter === category.url ? 'var(--textColor)' : 'var(--white)'}`}}/>
                    </div>
                    <p style={{color: `${filter === category.url ? 'var(--white)' : 'var(--textColor)'}`}}>{category.name}</p>
                </motion.div>
            ))}
        </div>

        <div className='menu__contents'>
            <Row flag={false} data={filteredDish}/>
        </div>
      </div>

    </div>
  )
}

export default Menu
