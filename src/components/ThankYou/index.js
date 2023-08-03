import './ThankYou.css';
import  imagen  from '../../assets/images/icon-thank-you.svg';
function ThankYou () {

  return(
    <div className="card__bg">
    <div className='card__thankyou'>
      <img className='thankyou__image' src={imagen} alt='Thank you!'
      ></img>
      <h2 className='card__title'>Thank you!</h2>
      <p className='card__description'>Thanks for confirm your subscription!<br/>
        We hope you have fun using our<br/>
        platform. If you ever need suport,<br/>
        please feel free to email us at<br/>
        support@loremgaming.com.
      </p>

    </div>
  </div>

  )
}

export { ThankYou };