import './AddOns.css';

function AddOns () {
  return (
    <div className="card">
    <div className='card__adds'>
      <h2 className='card__title'>Pick add-ons</h2>
      <p className='card__description'>Add-ons help enhance your gaming<br/>
        experience.
      </p>
        <form className='container__adds'>
          <label className='addons' htmlFor='add1'>
            <input className='add__input' type='checkbox' id="add1"></input>
            <div className='add--container'>
              <p className='add__subtitle'>Online service</p>
              <p className='add__description'>Access to multiplayer games</p>
            </div>
            <span className='add__price'>+$1/mo</span>
          </label>


          <label className='addons' htmlFor='add2'>
            <input className='add__input' type='checkbox' id="add2"></input>
            <div className='add--container'>
              <p className='add__subtitle'>Large storate</p>
              <p className='add__description'>Extra 1TB of cloud save</p>
            </div>
            <span className='add__price'>+$2/mo</span>
          </label>
          <label className='addons' htmlFor='add3'>
            <input className='add__input' type='checkbox' id="add3"></input>
            <div className='add--container'>
              <p className='add__subtitle'>Customizable profile</p>
              <p className='add__description'>Custom theme on your profile</p>
            </div>
            <span className='add__price'>+$2/mo</span>
          </label>
        </form>


        {/* <div className={`plan arcade ${plan===arcade1?'chosen':''}`} onClick={choseArcade1}>
          <div className='plan__image'></div>
          <div className='plan__information--container'>
            <div className='plan__name'>Arcade</div>
            {monthly
            ?<p className='plan__price'>$9/mo</p>
            :<div>
              <p className='plan__price'>$90/yr</p>
              <p className='plann__discount'>2 months free</p>
            </div>
            }
          </div>
        </div> */}



    </div>
  </div>



  )
}

export { AddOns }