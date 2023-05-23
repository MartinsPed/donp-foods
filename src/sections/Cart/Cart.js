import React from 'react'
import './Cart.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReplayIcon from '@mui/icons-material/Replay';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setHideCartShow } from '../../features/cart/cartShowSlice';
import { SelectCartItemsInfo, clearCart, increaseQty, removeFromCart } from '../../features/cartItemsInfo/cartItemsSlice';
import { SelectUser } from '../../features/user/userSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch()
    const hideCart = () => {
        dispatch(setHideCartShow())
    }
    
    const cartItems = useSelector(SelectCartItemsInfo)
    const user = useSelector(SelectUser)
    const handleIncrease = (itemId) => {
        dispatch(increaseQty(itemId))
    }
    const handleDecrease = (itemId) => {
        dispatch(removeFromCart(itemId))
    }

    const handleClearCart = () => {
        dispatch(clearCart())
        hideCart()
    }
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.qty, 0)

  return (
    <motion.div initial={{ opacity: 0, x: 200}}
    animate={{ opacity: 1, x: 0}}
    exit={{ opacity: 0, x: 200}} className='cart'>
      <div className='back'>
        <motion.div whileTap={{scale: 0.75}} onClick={hideCart}>
            <ArrowBackIcon className='back__icon'/>
        </motion.div>
        <p className='cart__p'>Cart</p>
        <motion.p whileTap={{scale: 0.75}} className='clear__p' onClick={handleClearCart}>
            Clear <ReplayIcon className='refresh__icon'/>
        </motion.p>
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
                    <Link to='/checkout'>
                        <motion.button whileTap={{scale: 0.8}} className='cart__total__contents__button'>
                            Check Out
                        </motion.button>
                    </Link>
                    
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
      
    </motion.div>
  )
}

export default Cart
