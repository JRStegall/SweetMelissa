import React from 'react';
import Navigate from './components/Nav';
import Head from './components/Header';
import Main from './components/Main';
import Shows from './components/Shows';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigate/>
      <Head/>
      <Main/>
      <Shows/>
    </div>
  );
}

export default App;
