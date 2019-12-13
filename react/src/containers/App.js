import React, {Component} from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Modals from '../components/Modals';
import SideBar from '../components/SideBar';
import TopBar from '../components/TopBar';
import Home from '../components/Home';
import Kupuj from '../components/Kupuj';
import Sprzedaj from '../components/Sprzedaj';




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
          {/* <Modals /> */}
          <SideBar />
          <div className="main-content">
              <TopBar />
              <Switch>
               <Route path="/" exact component={Home} />
                <Route path="/kupuj" component={Kupuj} />
                <Route path="/sprzedaj" component={Sprzedaj} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;