import React from 'react';
import './Header.css';
import { MultiStepContext } from '../MultiStepContext';

function Header () {
  const {
    step,
    steps
  } =React.useContext(MultiStepContext);

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