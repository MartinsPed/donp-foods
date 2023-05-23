import React from 'react'
import './Row.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { SelectCartItemsInfo, addToCart } from '../../features/cartItemsInfo/cartItemsSlice';
import { setCartItemsInfo } from '../../features/cartItemsInfo/cartItemsSlice';

const Row = ({flag, data}) => {
    const cartItems = useSelector(SelectCartItemsInfo)
    const dispatch = useDispatch()

    const handleAddToCart = (item) => {
      const existingItem = cartItems.find((cartItem) => 
      cartItem.id === item.id)
      if(existingItem) {
        dispatch(addToCart(item))
      } else {
        dispatch(setCartItemsInfo(item))
      }
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }

  return (
    <div className='row__container' style={{overflowX: `${flag ? 'scroll' : 'hidden'}`, flexWrap: `${flag ? 'no-wrap' : 'wrap'}`, justifyContent: `${flag ? '' : 'center'}`}}>
      {data && data.length > 0 ? data.map((item) => (
        <div className='overlay'>
          <div key={item?.id} className='image__div'>
            <motion.div whileHover={{scale: 1.1}} className='image'>
              <img className='img' src={item?.imageURL} alt={item?.title}/>
            </motion.div>
              
              <motion.div whileTap={{scale: 0.75}} className='image__right' onClick={() => handleAddToCart(item)}>
                  <ShoppingCartIcon className='icon'/>
              </motion.div>
          </div>
          <div className='right__contents'>
              <p className='right__content__p1'>
                  {item?.title}
              </p>
              <p className='right__content__p2'>
                  {item?.calories} Calories
              </p>
              <div className='price__div'>
                  <p className='price__div__p'>
                      <span className='price__div__span'>$</span> {item?.price}
                  </p>
              </div>
          </div>
        </div>
      )) : <div className='not__found'>
        <div className='not__found__image__div'>
          <img className='not__found__img' src='/img/NotFound.svg' alt='NotFound'/>
        </div>
        <p className='not__found__p'>Oooops!!! Item(s) Not Found</p>
        </div>}
    </div>
  )
}

export default Row
