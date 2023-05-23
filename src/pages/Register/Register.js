import React, { useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../Firebase'
import { toast } from 'react-toastify'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const Register = ({setActive}) => {
  const [state, setState] = useState(initialState)
  const { firstName, lastName, email, password, confirmPassword } = state
  
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
    if(!firstName || !lastName || !email || !password || !confirmPassword) return toast.info('Please fill in all fields')
    if(password.length < 8) return toast.info('Password must be of length 8 or greater!')
    if(password !== confirmPassword) return toast.error('Passwords do not match')

    const {user} = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(user, {
      displayName: `${lastName}`
    })
    setActive('home')
    navigate('/')
  }

  return (
    <div className='register__container'>
      <div className='register__form__div'>
        <h1 className='register__title'>
          Create Account
        </h1>
        <form className='register__form' onSubmit={handleSubmit}>
          <label className='register__form__label' htmlFor='fName'>First Name</label>
          <input className='register__form__input' type='text' name='firstName' value={firstName} onChange={handleChange}/>
          <label className='register__form__label' htmlFor='lName'>Last Name</label>
          <input className='register__form__input' type='text' name='lastName' value={lastName} onChange={handleChange}/>
          <label className='register__form__label' htmlFor='email'>Email Address</label>
          <input className='register__form__input' type='email' name='email' value={email} onChange={handleChange}/>
          <label className='register__form__label' htmlFor='password'>Password</label>
          <div className='register__password__div'>
            <input className='register__password__input' type={passwordType} name='password' value={password} onChange={handleChange}/>
            {passwordType === 'password' ? <VisibilityIcon className='register__password__icon' onClick={togglePassword}/> : <VisibilityOffIcon className='register__password__icon' onClick={togglePassword}/>}
          </div>
          <label className='register__form__label' htmlFor='confirmPassword'>Confirm Password</label>
          <div className='register__password__div'>
            <input className='register__password__input' type={passwordType} name='confirmPassword' value={confirmPassword} onChange={handleChange}/>
            {passwordType === 'password' ? <VisibilityIcon className='register__password__icon' onClick={togglePassword}/> : <VisibilityOffIcon className='register__password__icon' onClick={togglePassword}/>}
          </div>
                
          <button className='register__button'>
            Create Account
          </button>
        </form>
        <div className='register__divider'>
          <hr className='register__hr'/>
            <span className='register__span'>OR</span>
          <hr className='register__hr'/>
        </div>
        <div className='register__end__div'>
          <p>Already Have an Account?</p>
          <Link to='/login'>
            <button className='register__end__div__button'>
              LogIn
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Register
