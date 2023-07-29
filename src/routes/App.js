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

  const regularexpression = {
	user: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
  // user: /^[a-zA-Z0-9\_\-]{1,16}$/, // Letras, numeros, guion y guion_bajo
	// nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	// password: /^.{4,12}$/, // 4 a 12 digitos.
}

  return (
    <BrowserRouter>
        <div className="App">
          <Header/>
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
              <Route path="/plan" element={<Plan/>}></Route>
              <Route path="/addons" element={<AddOns/>}></Route>
              <Route path="/finishingup" element={<FinishingUp/>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer
              user={user}
              email={email}
              phone={phone}
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
