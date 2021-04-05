import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import StateProvider from './dataLayer/StateProvider';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

