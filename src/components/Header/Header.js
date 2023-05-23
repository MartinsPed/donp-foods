import React, { useState } from 'react'
import './Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SelectCartShow } from '../../features/cart/cartShowSlice';
import { setCartShow } from '../../features/cart/cartShowSlice';
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'


const Header = ({active, setActive, user, handleLogOut, isMenu, setIsMenu}) => {
  const [close, setClose] = useState(false)
  const showMenu = () => {
    setClose(!close)
  }
  const cartShow = useSelector(SelectCartShow)
  const showCart = () => {
    dispatch(setCartShow({
      cartShow: !cartShow
    }))
  }
  const cartItems = useSelector((state) => state.cartItemsInfo)
  console.log(cartItems.length)
  const dispatch = useDispatch()

  const showMenuOpen = () => {
    setIsMenu(!isMenu)
  }
  return (
    <header>
      <div className='header__nav__logo'>
        <Link to='/' className='header__logo'>
          <img src='/img/logo.png' alt='Logo' className='header__logo__img'/>
          <p className='header__logo__text'>DonP-Foods</p>
        </Link>
      </div>
      <nav close={close} style={{top: `${close ? '50px' : '-500px'}`}}>
          <motion.ul initial = {{ opacity: 0, x: 200}} animate = {{ opacity: 1, x: 0}} exit = {{ opacity: 0, x: 200}} className='header__ul'>
            <Link to='/' onClick={showMenu}>
              <li className={`${active === 'home' ? 'active header__ul__li' : 'header__ul__li'}`} onClick={() => setActive('home')}>
                Home
              </li>
            </Link>
            <Link to='/menu' onClick={showMenu}>
              <li className={`${active === 'menu' ? 'active header__ul__li' : 'header__ul__li'}`} onClick={() => setActive('menu')}>
                Menu
              </li>
            </Link>
            <Link to='/services' onClick={showMenu}>
              <li className={`${active === 'services' ? 'active header__ul__li' : 'header__ul__li'}`} onClick={() => setActive('services')}>
                Services
              </li>
            </Link>
            <Link to='/about' onClick={showMenu}>
              <li className={`${active === 'about' ? 'active header__ul__li' : 'header__ul__li'}`} onClick={() => setActive('about')}>
                About Us
              </li>
            </Link>
            <Link to='/contact' onClick={showMenu}>
              <li className={`${active === 'contact' ? 'active header__ul__li' : 'header__ul__li'}`} onClick={() => setActive('contact')}>
                Contact Us
              </li>
            </Link>
          </motion.ul>
          <div className='close__icon__div' onClick={showMenu}>
            <CloseIcon className='close__icon'/>
          </div>
      </nav>
      <div className='header__right'>
          <div className='menu__div'>
            <div onClick={showMenu}>
              { close ? <CloseIcon className='menu__icon'/> : <MenuIcon className='menu__icon'/>}
            </div>
            <p className='menu__icon__p' onClick={showMenu}>
              Menu
            </p>
          </div>
          <div className='header__cart__icon' onClick={showCart}>
            <ShoppingCartIcon className='cart__icon'/>
            {cartItems && cartItems.length > 0 && (
              <div className='header__cart__div'>
              <p className='header__cart__number'>
                {cartItems.length}
              </p>
            </div>
            )}
          </div>
          <div className='actions'>
            <div className='user'>
              {!user ? (
                <div>
                  <Link to='/login'>
                    <motion.button whileTap={{ scale: 0.8}} className='login__'>
                      LogIn
                    </motion.button>
                  </Link>
                  
                </div>
              ) : (
                <motion.img whileTap={{scale: 0.6}} src={user?.photoURL} referrerPolicy='no-referrer' alt='UserImage' className='user__image' onClick={showMenuOpen}/>
              )}
              
            </div>
            { isMenu && (
              <motion.div initial = {{ opacity: 0, scale: 0.6}} animate = {{ opacity: 1, scale: 1}} exit = {{ opacity: 0, scale: 0.6}} className='logout'>
                { user && user?.email === 'donptech1@gmail.com' && (
                <Link to='/create' onClick={() => setActive('')}>
                  <p className='logout__p' onClick={() => setIsMenu(false)} >New Item <AddIcon/></p>
                </Link>
                )}
                <Link to='/' onClick={() => setIsMenu(false)}>
                  <p className='logout__p' onClick={handleLogOut}>
                    LogOut <LogoutIcon/>
                  </p>
                </Link>
              </motion.div>
            )}
          </div>
      </div>
    </header>
  )
}

export default Header
