import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../src/routes';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
