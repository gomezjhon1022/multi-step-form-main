import './FinishingUp.css';

function FinishingUp() {
  return (
    <div className="card">
    <div className='card__finishingup'>
      <h2 className='card__title'>Finishing up</h2>
      <p className='card__description'>Double-check everything looks OK<br/>
        before confirming.
      </p>
        <div className='summary--container'>
          <div className='summary'>
            <div className='summary__plan'>
              <div className='summary__plan--container'>
              <p className='summary__name'>arcade (Monthly)</p>
              <p className='summary__change'>Change</p>
              </div>
              <div className='summary__price'>
                $9/mo
              </div>
            </div>
            <div className='summary__adds'>
            {true&&<div>add</div>}
            
            </div>
          </div>
          <div className='summary__total'>
            <div className='total__description'>Total (per month)</div>
            <div className='total__price'>+$12/mo</div>
          </div>
        </div>
    </div>
  </div>

  )
}

export { FinishingUp };