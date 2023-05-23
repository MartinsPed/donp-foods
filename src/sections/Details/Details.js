import React, { useEffect, useState } from 'react'
import './Details.css'
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../Firebase';
import Row from '../Row Container/Row';



const Details = () => {
  const [filteredFruits, setFilteredFruits] = useState([])
  const getFruits = async () => {
    const foodItemsRef = collection(db, 'foodItems')
    const filteredFruitsQuery = query(foodItemsRef, where ('category', '==', 'fruits'))
    const querySnapshot = await getDocs(filteredFruitsQuery)
    let filtered = []
    querySnapshot.forEach((doc) => {
      filtered.push({id: doc.id, ...doc.data()})
    })
    setFilteredFruits(filtered)
  }

  useEffect(() => {
    getFruits()
  }, [])
  

  return (
    <div className='section'>
      <div className='content'>
        <p className='content__p'>
          Our Freshly & Healthy Fruits
        </p>
      </div>
      <Row flag={true} data = {filteredFruits}/>
    </div>
  )
}

export default Details
