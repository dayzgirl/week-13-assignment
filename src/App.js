import React from 'react';
import './App.css';
import Navigation from './Navigation';
import LoginForm from './LoginForm';


function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
