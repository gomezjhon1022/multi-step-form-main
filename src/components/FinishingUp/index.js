import './FinishingUp.css';
import { useNavigate } from 'react-router-dom';

function FinishingUp({plan,monthly,setStep,addOns, planPrices,addOnsPrices}) {
  const navigate= useNavigate();
  const handleChangePlan = () => {
    navigate('/plan');
    setStep(2);
  }
  const handleSumTotal = () => {
    let sum = planPrices[plan];
    for (const addOn in addOns) {
      if (addOns[addOn]) {
        sum += addOnsPrices[addOn];
      }
    }
    return sum;

  }

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
              {!monthly
              ?<p className='summary__name'>{plan} (Monthly)</p>
              :<p className='summary__name'>{plan} (Yearly)</p>
              }
              <p className='summary__change' onClick={handleChangePlan}>Change</p>
              </div>
              {!monthly
              ?<div className='summary__price'>${planPrices[plan]}/mo</div>
              :<div className='summary__price'>${planPrices[plan]*10}/yr</div>
              }
            </div>
            <div className='summary__adds'>
              {addOns.add1&&<>
                <div className='subtitle--container'>
                <p className='summary__subtitle'>Online service</p>
                {!monthly
                ?<p className='summary__price'>+${addOnsPrices.add1}/mo</p>
                :<p className='summary__price'>+${10*addOnsPrices.add1}/yr</p>
                }
                </div>
              </>
              }
              {addOns.add2&&<>
                <div className='subtitle--container'>
                  <p className='summary__subtitle'>Large storate</p>
                  {!monthly
                  ?<p className='summary__price'>+${addOnsPrices.add2}/mo</p>
                  :<p className='summary__price'>+${10*addOnsPrices.add2}/yr</p>
                  }
                </div>
              </>
              }
              {addOns.add3&&<>
                <div className='subtitle--container'>
                  <p className='summary__subtitle'>Customizable profile</p>
                  {!monthly
                  ?<p className='summary__price'>+${addOnsPrices.add3}/mo</p>
                  :<p className='summary__price'>+${10*addOnsPrices.add3}/yr</p>
                  }
                </div>
              </>
              }
            </div>
          </div>
          <div className='summary__total'>
            {!monthly
            ?<>
              <div className='total__description'>Total (per month)</div>
              <div className='total__price'>{`+${handleSumTotal()}/mo`}</div>
            </>
            :<>
              <div className='total__description'>Total (per year)</div>
              <div className='total__price'>{`+${10*handleSumTotal()}/yr`}</div>
            </>
            }
          </div>
        </div>
    </div>
  </div>

  )
}

export { FinishingUp };