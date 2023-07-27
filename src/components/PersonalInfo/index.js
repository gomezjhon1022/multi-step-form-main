import './PersonalInfo.css';
import React from 'react';


function PersonalInfo () {

  return (
  <div className="card">
    <form >
      <h2 className='card__title'>Personal info</h2>
      <p className='card__description'>Please provide your name, email <br/>
        addres, and phone number.
      </p>
      <div className='card__information'>
        <label  for="name">
          <span className='card__subtitle'>Name</span>
          <input id="name" className='card__input' placeholder='e.g. Stephen King'></input>
        </label>
        <label for="email" >
          <span className='card__subtitle'>Email Adress</span>
          <input id="email" className='card__input' placeholder='e.g. stephenking@lorem.com'></input>
        </label>
        <label for="phone">
          <span className='card__subtitle'>Phone Number</span>
          <input id='phone' className='card__input' placeholder='e.g. +1 234 567 890'></input>
        </label>
      </div>

    </form>
  </div>
  )
}

export { PersonalInfo };