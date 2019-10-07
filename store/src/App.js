import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/counter';
import Login from './components/login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Login />
        <button className="btn-secondary">Click here</button>
      </header>
    </div>
  );
}

export default App;
