import './App.css';
import { PersonalInfo } from './components/PersonalInfo';
import { Plan } from './components/Plan';
import { AddOns } from './components/AddOns';
import { FinishingUp } from './components/FinishingUp';

function App() {
  return (
      <div className="App">
        <div>hola</div>
        <PersonalInfo/>
        <Plan/>
        <AddOns/>
        <FinishingUp/>
      </div>
  );
}

export default App;
