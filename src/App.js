import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header/Header';
import Create from './sections/Create/Create';
import { useDispatch } from 'react-redux';
import { auth, db } from './Firebase';
// import { setUserLoginDetails } from './features/user/userSlice';
import { setFoodItems } from './features/foodItems/foodItemsSlice';
import HomePage from './pages/HomePage/HomePage';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import Menu from './pages/MenuPage/Menu';
import Services from './pages/ServicesPage/Services';
import About from './pages/AboutPage/About';
import Contact from './pages/ContactPage/Contact';
import { signOut } from 'firebase/auth';
import LogIn from './pages/LogIn/LogIn';
import Register from './pages/Register/Register';
import Checkout from './pages/Checkout/Checkout';

function App() {
  const [active, setActive] = useState('home')
  const [user, setUser] = useState(null)
  const [isMenu, setIsMenu] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getAllFoodItems = async () => {
    const items = await getDocs(query(collection(db, 'foodItems'), orderBy('id', 'desc')))

    return items.docs.map((doc) => doc.data())
  }

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch(setFoodItems({
        foodItems: data
      }))
    })
  }

  useEffect(() => {
    fetchData()
  })

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        setUser(userAuth)
      } else {
        setUser(null)
      }
    })
  }, [])

  const handleLogOut = () => {
    signOut(auth).then(() => {
      setUser(null)
      setActive('home')
      setIsMenu(false)
      navigate('/')
    })
  }
  return (
    <AnimatePresence mode='wait'>
      <div className="App">
        <Header active={active} setActive={setActive} user={user} isMenu={isMenu} setIsMenu={setIsMenu} handleLogOut={handleLogOut}/>
        <main>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/menu' element={<Menu/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/login' element={<LogIn setActive={setActive} setUser={setUser} user={user}/>}/>
            <Route path='/register' element={<Register/>}/>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
    
  );
}

export default App;
