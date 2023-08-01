import './App.css';
import { PersonalInfo } from '../components/PersonalInfo';
import { Plan } from '../components/Plan';
import { AddOns } from '../components/AddOns';
import { FinishingUp } from '../components/FinishingUp';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { NotFound } from '../components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [user, setUser]=useState({data:'', valid:true});
  const [email, setEmail]=useState({data:'', valid:true});
  const [phone, setPhone]=useState({data:'', valid:true});
  const [monthly, setMonthly]=useState(false);
  const [plan, setPlan]=useState('arcade1');
  const [step, setStep]=useState(1);

  const regularexpression = {
	user: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

  return (
    <BrowserRouter>
        <div className="App">
          <Header step={step}/>
          <main>
            <Routes>
              <Route path="/" element={<PersonalInfo
                user={user}
                email={email}
                phone={phone}
                setUser={setUser}
                setEmail={setEmail}
                setPhone={setPhone}
                validname={user.valid}
                validemail={email.valid}
                validphone={phone.valid}
              />} ></Route>
              <Route path="/plan" element={<Plan
                monthly={monthly}
                setMonthly={setMonthly}
                plan={plan}
                setPlan={setPlan}
              />}></Route>
              <Route path="/addons" element={<AddOns/>}></Route>
              <Route path="/finishingup" element={<FinishingUp/>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer
              step={step}
              user={user}
              email={email}
              phone={phone}
              setStep={setStep}
              setUser={setUser}
              setEmail={setEmail}
              setPhone={setPhone}
              regularexpressionUser={regularexpression.user}
              regularexpressionEmail={regularexpression.email}
              regularexpressionPhone={regularexpression.phone}
            />
          </main>
        </div>
    </BrowserRouter>
  );
}

export default App;
