import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from '../components/SideBar';
import MainContent from './MainContent';
import loadScripts from '../loadScripts';

export default class App extends Component {
  componentDidMount() {
    loadScripts();
  }
  render() {
    return (
      <div className="App">
        <Router>
          <SideBar />
          <MainContent />
        </Router>
      </div>
    )
  }
}
