import React, { useState } from 'react'
import './Create.css'
import { motion } from 'framer-motion'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Loader from '../../components/Header/Loader/Loader';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../Firebase';
import { collection, doc, getDocs, orderBy, query, setDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
import { setFoodItems } from '../../features/foodItems/foodItemsSlice';
import { useDispatch } from 'react-redux';

const Create = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [calories, setCalories] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState(null)
  const [imageAsset, setImageAsset] = useState(null)
  const [fields, setFields] = useState(false)
  const [alertStatus, setAlertStatus] = useState('danger')
  const [msg, setMsg] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const uploadImage = (e) => {
    setIsLoading(true)
    const imageFile = e.target.files[0]
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`)
    const uploadTask = uploadBytesResumable(storageRef, imageFile)
    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    }, (error) => {
      console.log(error)
      setFields(true)
      setMsg('Error while uploading image...Try again later')
      setAlertStatus('danger')
      setTimeout(() => {
        setFields(false)
        setIsLoading(false)
      }, 4000)
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImageAsset(downloadURL)
        setIsLoading(false)
        setFields(true)
        setMsg('Image uploaded successfully')
        setAlertStatus('success')
        setTimeout(() => {
          setFields(false)
        }, 4000)
      })
    })
  }

  const deleteImage = () => {
    setIsLoading(true)
    const deleteRef = ref(storage, imageAsset)
    deleteObject(deleteRef).then(() => {
      setImageAsset(null)
      setIsLoading(false)
      setFields(true)
      setMsg('Image deleted successfully')
      setAlertStatus('success')
      setTimeout(() => {
        setFields(false)
      }, 4000)
    })
  }

  const saveDetails = () => {
    setIsLoading(true)
    try {
      if(!title || !calories || !imageAsset || !price || !category) {
        setFields(true)
        setMsg('Please fill in all fields')
        setAlertStatus('danger')
        setTimeout(() => {
          setFields(false)
          setIsLoading(false)
        }, 4000)
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imageAsset,
          category: category,
          calories: calories,
          qty: 1,
          price: price
        }
        saveItem(data)
        setIsLoading(false)
        setFields(true)
        setMsg('Data uploaded successfully')
        setAlertStatus('success')
        clearData()
        setTimeout(() => {
          setFields(false)
        }, 4000)
        
      }
    } catch (error) {
      console.log(error)
      setFields(true)
      setMsg('Error while uploading image...Try again later')
      setAlertStatus('danger')
      setTimeout(() => {
        setFields(false)
        setIsLoading(false)
      }, 4000)
    }

    fetchData()
  }

  const saveItem = async (data) => {
    await setDoc(doc(db, 'foodItems', `${Date.now()}`), data, { merge: true})
  }

  const clearData = () => {
    setTitle('')
    setImageAsset(null)
    setCalories('')
    setPrice('')
    setCategory('Select Category')
  }

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
  return (
    <div className='create'>
      <div className='create__content'>
        {
          fields && (
            <motion.p initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='create__content__p' style={{background: `${alertStatus === 'danger' ? 'red' : 'blue'}`}}>
              {msg}
            </motion.p>
          )
        }
        <div className='title__input'>
          <FastfoodIcon className='title__icon'/>
          <input type='text' required value={title} placeholder='Enter a title' onChange={(e) => setTitle(e.target.value)} className='input__title'/>
        </div>
        <div className='categories'>
          <select onChange={(e) => setCategory(e.target.value)} className='categories__select'>
            <option value='Other' className='categories__option'>Select category</option>
            {categories && categories.map((item) => (
              <option key={item.id} className='categories__option2' value={item.url}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='box'>
          {isLoading ? <Loader/> : <>
              {!imageAsset ? (<>
                <label className='box__label'>
                  <div className='box__label__div'>
                    <CloudUploadIcon className='cloud__upload'/>
                    <p className='cloud__upload__p'>Click here to upload</p>
                  </div>
                  <input type='file' name='uploadImage' accept='image/*' onChange={uploadImage} className='input__file__type'/>
                </label>
              </>) : (<>
                <div className='valid__box'>
                  <img src={imageAsset} alt='Uploaded File'className='uploaded__image'/>
                  <button type='button' className='delete__button__div' onClick={deleteImage}>
                    <DeleteIcon className='reset__icon'/>
                  </button>
                </div>
              </>)}
          </>}
        </div>
        <div className='desc__info'>
          <div className='desc__content'>
            <FoodBankIcon className='food__bank__icon'/>
            <input type='text' required 
            value={calories}
            onChange={(e) => setCalories(e.target.value)}placeholder='Calories' className='desc__input'/>
          </div>
          <div className='desc__content'>
            <AttachMoneyIcon className='food__bank__icon'/>
            <input type='text' required 
            value={price}
            onChange={(e) => setPrice(e.target.value)}placeholder='Price' className='desc__input'/>
          </div>
        </div>
        <div className='submit'>
          <button type='button' className='submit__button' onClick={saveDetails}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default Create
