import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import {disableReactDevtools} from '@fvilers/disable-react-devtools';

// context
import { AuthenticationContextProvider } from './context/authenticationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </React.StrictMode>
);
