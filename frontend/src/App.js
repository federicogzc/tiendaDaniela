import React from 'react';
import './App.css';
import Users from './Users';
import Products from './Products';
import Sales from './Sales';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tienda Daniela Dashboard</h1>
      </header>
      <div className="App-body">
        <Users />
        <Products />
        <Sales />
      </div>
    </div>
  );
}

export default App;
