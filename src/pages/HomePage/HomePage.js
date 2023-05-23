import React from 'react'
import './HomePage.css'
import Home from '../../sections/Home/Home'
import Details from '../../sections/Details/Details'
import Menu from '../../sections/Menu/Menu'
import Cart from '../../sections/Cart/Cart'
import { useSelector } from 'react-redux';
import { SelectCartShow } from '../../features/cart/cartShowSlice'

const HomePage = () => {
  const cartShow = useSelector(SelectCartShow)
  return (
    <div className='homepage'>
      <Home/>
      <Details/>
      <Menu/>
      { cartShow && 
        <Cart/>
      }
      
    </div>
  )
}

export default HomePage
