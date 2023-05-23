import React, { useState } from 'react'
import './LogIn.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../Firebase'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast } from 'react-toastify'
import { setUserLoginDetails } from '../../features/user/userSlice'
import { useDispatch } from 'react-redux'

const initialState = {
    email: '',
    password: ''
}

const LogIn = ({setActive, setUser, user}) => {
    const [state, setState] = useState(initialState)
    const { email, password } = state

    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = () => {
        if(passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const navigate = useNavigate()
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!email || !password) return toast.info('Please fill in all fields')
        
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        setUser(user)
        setActive('home')
        navigate('/')
    }

    const [isMenu, setIsMenu] = useState(false)

    const dispatch = useDispatch()

    const login = () => {
        if(!user) {
          signInWithPopup(auth, provider)
          .then((result) => {
            dispatch(setUserLoginDetails({
              user: result.user,        
            }))
          }).catch((error) => {
            alert(error.message)
          });
        } else {
          setIsMenu(!isMenu)
        }
    }
  return (
    <div className='login__container'>
        <div className='login__info'>
            <h1 className='login__title'>Log In</h1>
            <form className='login__form' onSubmit={handleSubmit}>
                <label className='login__form__label' htmlFor='email'>Email Address</label>
                <input className='login__form__input' type='email' name='email' value={email} onChange={handleChange}/>
                <label className='login__form__label' htmlFor='password'>Password</label>
                <div className='login__password__div'>
                    <input className='login__password__input' type={passwordType} name='password' value={password} onChange={handleChange}
                    />
                    {passwordType === 'password' ? <VisibilityIcon className='login__password__icon' onClick={togglePassword}/> : <VisibilityOffIcon className='login__password__icon' onClick={togglePassword}/>}
                </div>
                <button className='login__button'>
                  LogIn
                </button>
            </form>
            <div className='login__divider'>
                <hr className='login__divider__hr'/>
                <span className='login__divider__span'>OR</span>
                <hr className='login__divider__hr'/>
            </div>
            <div className='end__div'>
                <p>Don't Have an Account?</p>
                <Link to='/register'>
                <button className='end__div__button'>
                    Create Account
                </button>
                </Link>
            </div>
            <div className='login__divider'>
                <hr className='login__divider__hr'/>
                <span className='login__divider__span'>OR</span>
                <hr className='login__divider__hr'/>
            </div>
            <div className='end__div'>
                <p>Sign In With Google/Gmail?</p>
                <button className='end__div__button' onClick={login}>
                    Sign In With Google
                </button>
            </div>
        </div>
    </div>
  )
}

export default LogIn
