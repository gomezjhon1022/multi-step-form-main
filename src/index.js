import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './routes/App'
import { MultiStepProvider } from './components/MultiStepContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MultiStepProvider>
      <App />
    </MultiStepProvider>
  </React.StrictMode>
);
