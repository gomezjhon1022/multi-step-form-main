// import './plan.css';

function Plan() {

  return (
  <div className="card">
    <form>
      <h2 className='card__title'>Select your plan</h2>
      <p className='card__description'>You have de option of monthly or<br/>
        yearly billing.
      </p>


      {/* <div className='card__information'>
        <label  for="name">
          <span className='card__subtitle'>Name</span>
          <input type='text' id="name" className='card__input' placeholder='e.g. Stephen King' required></input>
        </label>
        <label for="email" >
          <span className='card__subtitle'>Email Adress</span>
          <input type='email' id="email" className='card__input' placeholder='e.g. stephenking@lorem.com' required></input>
        </label>
        <label for="phone">
          <span className='card__subtitle'>Phone Number</span>
          <input type='number' id='phone' className='card__input' placeholder='e.g. +1 234 567 890' required></input>
        </label>
      </div> */}

      <div class="form-group">
        <label for="option1">Option 1</label>
        <input type="radio" id="option1" name="option" value="option1"/>
      </div>
      <div class="form-group">
        <label for="option2">Option 2</label>
        <input type="radio" id="option2" name="option" value="option2"/>
      </div>
      <div class="form-group">
        <label for="option3">Option 3</label>
        <input type="radio" id="option3" name="option" value="option3"/>
      </div>

    </form>
  </div>

  )
}

export { Plan };