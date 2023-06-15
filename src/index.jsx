import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './App';
import { Suspense } from 'react';
import MyContextProvidor from './context/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyContextProvidor>
      <Suspense fallback={(<div>Loading.........</div>)}>
        <App />
      </Suspense>
    </MyContextProvidor>
  </React.StrictMode>
);

