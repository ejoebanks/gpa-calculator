import React from 'react';
import CalculationForm from "./components/CalculationForm";
import NavBar from "./components/Navbar";
import Table from './components/Table';
import Cumulative from './components/Cumulative';

import addRow from './components/TableRow';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="/*App-header*/">
      <NavBar/>
      </header>
      <CalculationForm />
    </div>
  );
}

export default App;
