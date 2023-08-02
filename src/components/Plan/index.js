import './plan.css';

function Plan({monthly, setMonthly, plan, setPlan}) {

  const handlePlanChange = (event) => {
    const newValue=event.target.checked;
    setMonthly(newValue);
  }

  const choseArcade1 = () => {
    setPlan('Arcade');
  }
  const choseAdvanced2 = () => {
    setPlan('Advanced');
  }
  const chosePro3 = () => {
    setPlan('Pro');
  }


  const arcade1= 'Arcade';
  const advanced2= 'Advanced';
  const pro3 = 'Pro';
  console.log('this is plan',plan);

  return (
  <div className="card">
    <div className='card__plan'>
      <h2 className='card__title'>Select your plan</h2>
      <p className='card__description'>You have de option of monthly or<br/>
        yearly billing.
      </p>
      <div className='plan__options--container'>
        <div className={`plan arcade ${plan===arcade1?'chosen':''}`} onClick={choseArcade1}>
          <div className='plan__image'></div>
          <div className='plan__information--container'>
            <div className='plan__name'>Arcade</div>
            {!monthly
            ?<p className='plan__price'>$9/mo</p>
            :<div>
              <p className='plan__price'>$90/yr</p>
              <p className='plann__discount'>2 months free</p>
            </div>
            }
          </div>
        </div>
        <div className={`plan advanced ${plan===advanced2?'chosen':''}`} onClick={choseAdvanced2}>
          <div className='plan__image'></div>
          <div className='plan__information--container'>
            <div className='plan__name'>Advanced</div>
            {!monthly
            ?<p className='plan__price'>$12/mo</p>
            :<div>
              <p className='plan__price'>$120/yr</p>
              <p className='plann__discount'>2 months free</p>
            </div>
            }
          </div>
        </div>
        <div className={`plan pro ${plan===pro3?'chosen':''}`} onClick={chosePro3}>
          <div className='plan__image'></div>
          <div className='plan__information--container'>
            <div className='plan__name'>Pro</div>
            {!monthly
            ?<p className='plan__price'>$150/mo</p>
            :<div>
              <p className='plan__price'>$90/yr</p>
              <p className='plann__discount'>2 months free</p>
            </div>
            }
          </div>
        </div>
      </div>
      <div className='plan__time'>
        <label className='plan__time--switcher' htmlFor='switch'>
          <p className={`${!monthly?'plan__selected':'plan__monthly'}`}>Monthly</p>
          <input checked={monthly} onChange={handlePlanChange} className='toggle__input' type='checkbox' id="switch"/>
          <span className='toggle__fill' htmlFor='switch'></span>
          <p className={`${monthly?'plan__selected':'plan__yearly'}`}>Yearly</p>
        </label>
      </div>
    </div>
  </div>

  )
}

export { Plan };