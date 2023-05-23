import React from 'react'
import './Checkout.css'
import { useDispatch, useSelector } from 'react-redux'
import { SelectCartItemsInfo, increaseQty, removeFromCart } from '../../features/cartItemsInfo/cartItemsSlice';
import { SelectUser } from '../../features/user/userSlice';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const dispatch = useDispatch()
  const user = useSelector(SelectUser)
  const handleIncrease = (itemId) => {
    dispatch(increaseQty(itemId))
  }
  const handleDecrease = (itemId) => {
    dispatch(removeFromCart(itemId))
  }
  const cartItems = useSelector(SelectCartItemsInfo)
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0)

  return (
    <div className='checkout__container'>
      <div className='step__1'>
        <div className='step'>
          <p>Step 1 of 3</p>
        </div>
        <div className='step__title'>
          <h1>Shipping Information</h1>
        </div>
        <div>
          <div className='checkout__form'>
            <label className='checkout__form__label'>Contact</label>
            <div className='inputs'>
              <input className='checkout__form__input' type='text' placeholder='Name' required/>
              <input className='checkout__form__input' type='email' placeholder='Email' required/>
              <input className='checkout__form__input' type='tel' placeholder='Phone No.' pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
              <small>Format: 234-706-277-5013</small>
            </div>
            
            <label className='checkout__form__label'>Address</label>
            <div className='inputs'>
              <input className='checkout__form__input' type='text' placeholder='Address' required/>
              <input className='checkout__form__input' type='text' placeholder='City' required/>
              <input className='checkout__form__input' type='text' placeholder='State' required/>
            </div>
          </div>
        </div>
      </div>
      <div className='step__1'>
        <div className='step'>
          <p>Step 2 of 3</p>
        </div>
        <div className='step__title'>
          <h1>Payment Methods</h1>
        </div>
        <div className='card__box'>
          <div className='card__div'>
            <img className='card__image' src='/img/visa.jpeg' alt=''/>
          </div>
          <div className='card__div'>
            <img className='card__image' src='/img/verve.jpeg' alt=''/>
          </div>
          <div className='card__div'>
            <img className='card__image' src='/img/mastercard.png' alt=''/>
          </div>
          <div className='card__div'>
            <img className='card__image' src='/img/flutterwave.png' alt=''/>
          </div>
          <div className='card__div'>
            <img className='card__image' src='/img/paystack.png' alt=''/>
          </div>
        </div>
        <div className='confirm__card'>
          <div className='confirm__card__div'>
            <img className='confirm__card__image' src='/img/DebitCard.jpeg' alt=''/>
          </div>
          <div className='confirm__card__div'>
            <img className='confirm__card__image' src='/img/DebitCard.jpeg' alt=''/>
          </div>
        </div>
      </div>
      <div className='step__1'>
        <div className='step'>
          <p>Step 3 of 3</p>
        </div>
        <div className='step__title'>
          <h1>Order Review</h1>
        </div>
        {cartItems && cartItems.length > 0 ? (
          <div className='cart__bottom'>
            <div className='cart__bottom__content'>
              { cartItems && cartItems.map((item) => (
                <div key={item.id} className='cart__item'>
                  <img className='cart__item__img' src={item?.imageURL} alt=''/>
                  <div className='cart__item__name'>
                    <p className='cart__item__name__p'>
                      {item?.title}
                    </p>
                    <p className='cart__item__unit__price'>
                      Unit Price $ {(item?.price)}
                    </p>
                    <p className='cart__item__name__price'>
                      $ {parseFloat(item?.price) * item?.qty}
                    </p>
                  </div>
                  <div className='cart__buttons'>
                    <motion.div whileTap={{scale: 0.75}}>
                        <RemoveIcon className='cart__button' onClick={() => handleDecrease(item.id)}/>
                    </motion.div>
                    <p className='quantity'>{item?.qty}</p>
                    <motion.div whileTap={{scale: 0.75}}>
                        <AddIcon className='cart__button' onClick={() => handleIncrease(item.id)}/>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
            <div className='cart__total'>
              <div className='cart__total__contents'>
                <p className='cart__total__contents__p'>Sub-Total</p>
                <p className='cart__total__contents__p'>$ {totalPrice}</p>
              </div>
              <div className='cart__total__contents'>
                <p className='cart__total__contents__p'>Delivery</p>
                <p className='cart__total__contents__p'>$ 2.5</p>
              </div>
              <div className='cart__total__contents__empty'></div>
              <div className='cart__total__contents'>
                <p className='cart__total__contents__p'>Total</p>
                <p className='cart__total__contents__p'>$ {totalPrice + 2.5}</p>
              </div>
              { user ? (
                <motion.button whileTap={{scale: 0.8}} className='cart__total__contents__button'>
                  Check Out
                </motion.button>
                ) : (
                    <motion.button whileTap={{scale: 0.8}} className='cart__total__contents__button'>
                      Log In
                    </motion.button>
              )}
            </div>
          </div>
      ) : (
        <div className='empty__cart__div'>
          <img className='empty__cart__div__img' src='/img/emptyCart.svg' alt='Empty Cart SVG'/>
          <p className='empty__cart__div__p'>
            Ooooops... You have no item(s) in cart
          </p>
        </div>
      )}
      <div className='confirm__div'>
        <Link to='/'>
          <button className='checkout__button'>
            Confirm
          </button>
        </Link>
        
      </div>
    </div>
    </div>
  )
}

export default Checkout
