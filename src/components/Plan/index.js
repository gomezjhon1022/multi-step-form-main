import './plan.css';
import iconAdvanced from '../../assets/icon-advanced.svg';

function Plan({montly, setMonthly}) {

  const handlePlanChange = (event) => {
    const newValue=event.target.checked;
    setMonthly(newValue);
    console.log(newValue);
  }

  return (
  <div className="card">
    <div className='card__plan'>
      <h2 className='card__title'>Select your plan</h2>
      <p className='card__description'>You have de option of monthly or<br/>
        yearly billing.
      </p>
      <div className='plan__options--container'>
        <div className='plan arcade'>
          <div className='plan__image'></div>
          <div className='plan__information--container'>
            <div className='plan__name'>Arcade</div>
            <div className='plan__price'></div>
          </div>
        </div>
        <div className='plan advanced'>
          <div className='plan__image'></div>
          <div className='plan__information--container'>
            <div className='plan__name'>Advanced</div>
            <div className='plan__price'></div>
          </div>
        </div>
        <div className='plan pro'>
          <div className='plan__image'></div>
          <div className='plan__information--container'>
            <div className='plan__name'>Pro</div>
            <div className='plan__price'></div>
          </div>
        </div>
      </div>

      <div className='plan__time'>
        <p className='plan__monthly'>monthly</p>
        <label className='plan__time--switcher' htmlFor='switch'>
          <input checked={montly} onChange={handlePlanChange} className='toggle__input' type='checkbox' id="switch"/>
          <span className='toggle__fill' htmlFor='switch'></span>
        </label>
        <p className='plan__yearly'>Yearly</p>
      </div>


    </div>
  </div>

  )
}

export { Plan };