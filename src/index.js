import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';
import HelloWorld from './components/HelloWorld';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>,
);
