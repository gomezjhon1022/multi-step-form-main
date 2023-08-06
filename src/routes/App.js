import './App.css';
import { PersonalInfo } from '../components/PersonalInfo';
import { Plan } from '../components/Plan';
import { AddOns } from '../components/AddOns';
import { FinishingUp } from '../components/FinishingUp';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { NotFound } from '../components/NotFound';
import { ThankYou } from '../components/ThankYou';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename='/multi-step-form-main'>
        <div className="App">
          <Header/>
          <main>
            <Routes>
              <Route path="/" element={<PersonalInfo/>} ></Route>
              <Route path="/plan" element={<Plan/>}></Route>
              <Route path="/addons" element={<AddOns/>}></Route>
              <Route path="/finishingup" element={<FinishingUp/>}></Route>
              <Route path='/thankyou' element={<ThankYou></ThankYou>}></Route>
              <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
            <Footer/>
          </main>
        </div>
      </BrowserRouter>
      );
}

export default App;
