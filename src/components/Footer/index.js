import { useNavigate } from 'react-router-dom';
import './Footer.css'

function Footer({user,email,phone, regularexpressionUser,regularexpressionEmail,regularexpressionPhone, setUser, setEmail, setPhone, step, setStep}) {
  const navigate = useNavigate();

  const step1=1;

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
  }

  return (
  <div className="footer">
    <button className={`button--back ${step===step1?'hidden':''}`} onClick={back}>Go Back</button>
    <button className='button--next' onClick={next}>Next Step</button>
  </div>)
}

export { Footer };