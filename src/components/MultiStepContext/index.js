import React from 'react'
import { useState } from 'react';

const MultiStepContext = React.createContext();

function MultiStepProvider({children}) {
  const [user, setUser]=useState({data:'', valid:true});
  const [email, setEmail]=useState({data:'', valid:true});
  const [phone, setPhone]=useState({data:'', valid:true});
  const [monthly, setMonthly]=useState(false);
  const [plan, setPlan]=useState('Arcade');
  const [step, setStep]=useState(1);
  const [addOns, setAddOns]=useState({add1:false,add2:false,add3:false});
  const [planPrices,setPlanPrices]=useState({Arcade:9,Advanced:12,Pro:15});
  const [addOnsPrices,setAddOnsPrices]=useState({add1:1,add2:2,add3:2});

  const regularexpression = {
	user: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
  }
  const steps = [
    {number:1,name:'YOUR INFO'},
    {number:2,name:'SELECT PLAN'},
    {number:3,name:'ADD-ONS'},
    {number:4,name:'SUMMARY'},
  ];

  return (
    <MultiStepContext.Provider value={{
      step,
      steps,
      user,
      email,
      phone,
      addOns,
      monthly,
      plan,
      planPrices,
      addOnsPrices,
      setStep,
      setUser,
      setEmail,
      setPhone,
      setAddOns,
      setMonthly,
      regularexpression,
      setPlan,
    }
    }>
      {children}
    </MultiStepContext.Provider>
  )
}

export { MultiStepContext, MultiStepProvider };