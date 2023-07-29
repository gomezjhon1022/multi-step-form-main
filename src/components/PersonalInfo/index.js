import './PersonalInfo.css';
import React from 'react';



function PersonalInfo ({user, setUser,email,setEmail,phone, setPhone,validname, validemail, validphone}) {
  const onChangeName = (e) => {
    setUser({...user,data:e.target.value});
  }

  const onChangeEmail =(e) => {
    setEmail({...email,data:e.target.value});
  }
  const onChangePhone = (e) => {

    setPhone({...phone,data:e.target.value});
  }






  return (
  <div className="card">
    <form>
      <h2 className='card__title'>Personal info</h2>
      <p className='card__description'>Please provide your name, email <br/>
        addres, and phone number.
      </p>
      <div className='card__information'>
        <label className='card__label'  htmlFor="name">
          <div className='card__subtitle--container'>
            <span className='card__subtitle'>Name</span>
            {!validname &&<p className='card--error'>This fiel is required</p>}
          </div>
          <input value={user.data} onChange={onChangeName} type='text' id="name" className={`card__input ${!validname&&'input--error'}`} placeholder='e.g. Stephen King' required></input>
        </label>
        <label className='card__label' htmlFor="email" >
          <div className='card__subtitle--container'>
            <span className='card__subtitle'>Email Adress</span>
            {!validemail&&<p className='card--error'>Invalid email address</p>}
          </div>
          <input value={email.data} onChange={onChangeEmail} type='email' id="email" className={`card__input ${!validemail&&'input--error'}`} placeholder='e.g. stephenking@lorem.com' required></input>
        </label>
        <label className='card__label' htmlFor="phone">
          <div className='card__subtitle--container'>
            <span className='card__subtitle'>Phone Number</span>
            {!validphone&&<p className='card--error'>Invalid phone number</p>}
          </div>
          <input value={phone.data} onChange={onChangePhone} type='number' id='phone' className={`card__input ${!validphone&&'input--error'}`}  placeholder='e.g. +1 234 567 890' required></input>
        </label>
      </div>
    </form>
  </div>
  )
}

export { PersonalInfo };