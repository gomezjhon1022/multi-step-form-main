import './Header.css';

function Header ({step}) {
  const steps = [1, 2, 3, 4];

  return (
  <div className="header">
    <div className='header__steps'>
      {steps.map((stepNumber) => (
        <div
          key={stepNumber}
          className={`step ${step === stepNumber? 'step--current':''}`}
        >
          {stepNumber}
        </div>
      ))
      }
    </div>
  </div>
  )
}

export { Header };