import { useNavigate } from 'react-router-dom';
import './Footer.css'
import React from 'react';
import { MultiStepContext } from '../MultiStepContext';

function Footer() {
  const {
    user,
    email,
    phone,
    regularexpression,
    regularexpressionUser=regularexpression.user,
    regularexpressionEmail=regularexpression.email,
    regularexpressionPhone=regularexpression.phone,
    setUser,
    setEmail,
    setPhone,
    step,
    setStep,
    // setMonthly,
    // setPlan,
    // setAddOns
  }=React.useContext(MultiStepContext);

  const navigate = useNavigate();

  const next = () => {
    let data1Is=false;
    let data2Is=false;
    let data3Is=false;

    if (step===1) {
      if(regularexpressionUser) {
        if(regularexpressionUser.test(user.data)) {
            setUser({...user, valid:true});
            data1Is=true;
        } else {
          setUser({...user, valid:false});
        }
        if(regularexpressionEmail.test(email.data)) {
          setEmail({...email, valid:true});
          data2Is=true;
        } else {
          setEmail({...email, valid:false});
        }
        if(regularexpressionPhone.test(phone.data)) {
          setPhone({...phone, valid:true});
          data3Is=true;
        } else {
          setPhone({...phone, valid:false});
        }
      }
      if (data1Is && data2Is && data3Is) {
        navigate('/plan');
        setStep(2);
      }
    }
    if (step===2) {
      navigate('/addons');
      setStep(3);
    }

    if (step==3) {
      navigate('/finishingup');
      setStep(4);
    }
    if (step==4) {
      navigate('/thankyou');
      reload();
    }
  }

  const back = () => {
    if (step===2) {
      setStep(1);
      navigate('/');
    }
    if (step===3) {
      setStep(2);
      navigate('/plan');
    }
    if (step===4) {
      setStep(3);
      navigate('/addons');
    }
  }

  const reload = () =>{
    setTimeout(() => {
      navigate('/');
      window.location.reload();
    }, 3000);
  }

  return (
  <div className={`footer ${step===5?'invisible':''}`}>
    <button className={`button--back ${step===1?'hidden':''}`} onClick={back}>Go Back</button>
    {step!==4?<button className='button--next' onClick={next}>Next Step</button>:<button className='button--confirm' onClick={next}>Confirm</button>}
  </div>)
}

export { Footer };