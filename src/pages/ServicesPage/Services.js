import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className='services__container'>
      <div className='services__section'>
        <div className='services__section__container'>
          <h1 className='services__section__container__title'>
            Subscribe To Our Newsletter
          </h1>
          <form className='services__section__container__form' action="">
            <input className='services__section__container__input' type="email" name="" id="" placeholder="Enter your email..."/>
            <button class='services__section__container__button' type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='services__content'>
        <div className='services__content__p'>
          For more information on our services, what we do, please see our list of services below:
        </div>
      </div>
      <div className='services__section__container'>
          <article className='article'>
            <h1 className='article__title'>
              Our Services
            </h1>
            <ul className='article__ul'>
              <li className='article__li'>
                <h3 className='article__li__heading'>
                  Home Service Cooking
                </h3>
                <p className='article__li__p'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolorem ullam dolor possimus obcaecati voluptates natus quam illum mollitia sapiente neque illo facere inventore accusamus minima optio cupiditate placeat excepturi!
                </p>
                <p className='article__li__plus'>
                  Pricing: $10,000 - $50,000
                </p>
              </li>
              <li className='article__li'>
                <h3 className='article__li__heading'>
                  Outdoor Cooking & Catering Services
                </h3>
                <p className='article__li__p'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolorem ullam dolor possimus obcaecati voluptates natus quam illum mollitia sapiente neque illo facere inventore accusamus minima optio cupiditate placeat excepturi!
                </p>
                <p className='article__li__plus'>
                  Pricing: $10,000 - $50,000
                </p>
              </li>
              <li className='article__li'>
                <h3 className='article__li__heading'>
                  Cooking Utensils Rentals
                </h3>
                <p className='article__li__p'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolorem ullam dolor possimus obcaecati voluptates natus quam illum mollitia sapiente neque illo facere inventore accusamus minima optio cupiditate placeat excepturi!
                </p>
                <p className='article__li__plus'>
                  Pricing: $10,000 - $50,000
                </p>
              </li>
              <li className='article__li'>
                <h3 className='article__li__heading'>
                  Home Service Cooking
                </h3>
                <p className='article__li__p'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolorem ullam dolor possimus obcaecati voluptates natus quam illum mollitia sapiente neque illo facere inventore accusamus minima optio cupiditate placeat excepturi!
                </p>
                <p className='article__li__plus'>
                  Pricing: $10,000 - $50,000
                </p>
              </li>
            </ul>
          </article>
          <aside className='aside'>
            <h3 className='aside__title'>
              Get A Quote
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

export default Services
