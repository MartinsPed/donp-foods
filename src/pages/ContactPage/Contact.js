import React from 'react'
import './Contact.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='contact__container'>
      <div className='contact__section'>
        <div className='contact__section__container'>
          <h1 className='contact__section__container__title'>
            Subscribe To Our Newsletter
          </h1>
          <form className='contact__section__container__form' action="">
            <input className='contact__section__container__input' type="email" name="" id="" placeholder="Enter your email..."/>
            <button class='contact__section__container__button' type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='circular__container'>
        <div className='circular__content'>
          <div className='content__box'>
            <div className='card'>
              <div className='image__box2'>
                <div className='image__box__div'>
                  <img className='image2' src='/img/DonP.jpg' alt=''/>
                </div>
                
              </div>
              <div className='textbox'>
                <h2 className='textbox__h2'>
                  Don Pedro <br/>
                  <span className='textbox__span'>
                    CEO DonP-Foods Inc.
                  </span>
                </h2>
                <ul className='circular__ul'>
                  <li className='circular__li'>
                    <Link to='https://www.facebook.com/martins.pedro1'>
                      <FacebookIcon/>
                    </Link>
                  </li>
                  <li className='circular__li'>
                    <Link to='https://wa.me/07062775013?text=Hi...I saw your web design...I would love to have a web page designed and built for my business'>
                      <WhatsAppIcon/>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='contact__content'>
        <div className='contact__content__p'>
          For more information on our services, to hire us for any cooking events/occasions, please contact us via the following channels/outlets:
        </div>
      </div>
      <div className='contact__section__container'>
          <article className='article'>
            <h1 className='article__title'>
              Contact Us
            </h1>
            <ul className='article__ul'>
              <li className='article__li'>
                <h3 className='article__li__heading'>
                  Head Office
                </h3>
                <p className='article__li__p'>
                    <span className='article__li__span'>
                      DonP-Foods Inc.,
                    </span>
                   Plot 24 Okito Street, Awodi-Ora, Ajeromi-Ifelodun, Lagos, Nigeria.
                </p>
                <p className='article__li__plus'>
                  <p className='article__li__p'>Tel: 234 706 277 5013 <hr/> 234 816 078 8073</p>
                  <hr/>
                  <p className='article__li__p'>E-mail: donptech1@gmail.com</p>
                </p>
              </li>
            </ul>
          </article>
          <aside className='aside'>
            <h3 className='aside__title'>
              Send A Mail
            </h3>
            <form action="">
              <div className='quoteform__content'>
                <label className='quoteform__label'>
                  Name
                </label>
                <input className='quoteform__input' type="text" name="" id="" placeholder="Enter your name..."/>
              </div>
              <div className='quoteform__content'>
                <label className='quoteform__label'>
                  E-mail
                </label>
                <input className='quoteform__input' type="email" name="" id="" placeholder="Enter your email..."/>
              </div>
              <div className='quoteform__content'>
                <label className='quoteform__label'>
                  Message
                </label>
                <textarea className='quoteform__textarea' type="text" name="" id="" cols="30" rows="10" placeholder="Message..."/>
              </div>
              
              <button class="quoteform__button" type="submit">
                Send Message
              </button>
            </form>
          </aside>    
      </div>
      
    </div>
  )
}

export default Contact