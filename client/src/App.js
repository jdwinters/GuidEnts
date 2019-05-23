import React from 'react';
import logo from './logo.png';
import Glogo from './Glogo.png';
import './App.css';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<h1>Welcome! </h1>
        <p>
        </p>
        <img src={Glogo} className="Google-logo" alt="Glogo" />
        <a href="/auth/google" class="button">Sign in With Google</a>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
