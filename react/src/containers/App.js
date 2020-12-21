import React, {Component} from 'react';
// import { connect } from 'react-redux';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Modals from '../components/Modals';
import TopBar from '../components/TopBar/TopBar';
import Home from '../components/Home';
import Buy from '../components/Buy';
import Sell from '../components/Sell';
import News from '../components/News';
import New from '../components/New';


class App extends Component {
  themeLoader = () => {
    const script = document.createElement('script');

    script.src = `${process.env.PUBLIC_URL}/assets/js/theme.min.js`;
    script.async = true;

    document.body.appendChild(script);
  }
  componentDidMount() {
    this.themeLoader();
    // window.$('[data-toggle="tooltip"]').tooltip();
  }

  componentDidUpdate() {
    this.themeLoader();
    // window.$('[data-toggle="tooltip"]').tooltip();
  }

  componentWillUnmount() {
    this.themeLoader();
    // window.$('[data-toggle="tooltip"]').tooltip();

  }

  render() {

    return (
      <div className="App" >
        <Router>
          <SideBar />

          <div className="main-content">
              <TopBar />
              <Switch>
               <Route path="/" exact component={Home} />
                <Route path="/Buy" component={Buy} />
                <Route path="/sell" component={Sell} />
                <Route path="/new" component={New} />
                <Route path="/news" component={News} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;