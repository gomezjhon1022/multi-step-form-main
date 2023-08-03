import './Header.css';

function Header ({step}) {
  const steps = [
    {number:1,name:'YOUR INFO'},
    {number:2,name:'SELECT PLAN'},
    {number:3,name:'ADD-ONS'},
    {number:4,name:'SUMMARY'},
  ];

  return (
    <>
      <div className="header">
        <div className='header__steps'>
          {steps.map((stepData) => (
            <div
              key={stepData.number}
              className={`step ${step === stepData.number? 'step--current':''}`}
            >
            {stepData.number}
            </div>
          ))
          }
        </div>
      </div>
      <div className="header--desktop">
        <div className='header__steps'>
          {steps.map((stepData) => (
              <div className='header__steps--container' key={stepData.name}>
                <div
                  className={`step ${step === stepData.number? 'step--current':''}`}
                >
                {stepData.number}
                </div>
                <div>
                  <p className='step--desktop'>STEP {stepData.number}</p>
                  <p className='step__name--desktop'>{stepData.name}</p>
                </div>
              </div>
          ))
          }
        </div>
      </div>
    </>
  )
}

export { Header };