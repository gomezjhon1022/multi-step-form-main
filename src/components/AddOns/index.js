import './AddOns.css';

function AddOns ({addOns,setAddOns, monthly}) {
  const handleChange=(event)=> {
    const {id, checked} = event.target;
    setAddOns((prevAddOns) =>({...prevAddOns, [id]:checked}));
    console.log(id,checked)
  }

  return (
    <div className="card">
    <div className='card__adds'>
      <h2 className='card__title'>Pick add-ons</h2>
      <p className='card__description'>Add-ons help enhance your gaming<br/>
        experience.
      </p>
        <form className='container__adds'>
          <label className='addons' htmlFor='add1'>
            <input className='add__input' type='checkbox' id="add1"
            checked={addOns.add1}
            onChange={handleChange}
            ></input>
            <div className='add--container'>
              <p className='add__subtitle'>Online service</p>
              <p className='add__description'>Access to multiplayer games</p>
            </div>
            {!monthly
            ?<span className='add__price'>+$1/mo</span>
            :<span className='add__price'>+$10/yr</span>
            }
          </label>
          <label className='addons' htmlFor='add2'>
            <input className='add__input' type='checkbox' id="add2"
              checked={addOns.add2}
              onChange={handleChange}
            ></input>
            <div className='add--container'>
              <p className='add__subtitle'>Large storate</p>
              <p className='add__description'>Extra 1TB of cloud save</p>
            </div>
            {!monthly
            ?<span className='add__price'>+$2/mo</span>
            :<span className='add__price'>+$20/yr</span>
            }
          </label>
          <label className='addons' htmlFor='add3'>
            <input className='add__input' type='checkbox' id="add3"
              checked={addOns.add3}
              onChange={handleChange}
            ></input>
            <div className='add--container'>
              <p className='add__subtitle'>Customizable profile</p>
              <p className='add__description'>Custom theme on your profile</p>
            </div>
            {!monthly
            ?<span className='add__price'>+$2/mo</span>
            :<span className='add__price'>+$20/yr</span>
            }
          </label>
        </form>
    </div>
  </div>



  )
}

export { AddOns }