import './App.css';
import { PersonalInfo } from './components/PersonalInfo';
import { Plan } from './components/Plan';
import { AddOns } from './components/AddOns';
import { FinishingUp } from './components/FinishingUp';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
      <div className="App">
        <Header/>
        <main>
          <PersonalInfo/>
          {/* <Plan/>
          <AddOns/>
          <FinishingUp/> */}
          <Footer/>
        </main>
      </div>
  );
}

export default App;
