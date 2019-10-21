import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from '../components/SideBar';
import MainContent from '../containers/MainContent';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <MainContent />
      </Router>
    </div>
  );
}

export default App;
