import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css"
import './index.css';
import Menu from './pages/Menu';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Menu/>
  </React.StrictMode>,
);
