import './Footer.css'

function Footer({user,email,phone, regularexpressionUser,regularexpressionEmail,regularexpressionPhone, setUser, setEmail, setPhone}) {

  const validation = () => {
    if(regularexpressionUser) {
      if(regularexpressionUser.test(user.data)) {
          setUser({...user, valid:true});
      } else {
        setUser({...user, valid:false});
      }
      if(regularexpressionEmail.test(email.data)) {
        setEmail({...email, valid:true});
      } else {
        setEmail({...email, valid:false});
      }
      if(regularexpressionPhone.test(phone.data)) {
        setPhone({...phone, valid:true});
      } else {
        setPhone({...phone, valid:false});
      }
    }
  }

  return (
  <div className="footer">
    <button className='button--next' onClick={validation}>Next Step</button>
  </div>)
}

export { Footer };