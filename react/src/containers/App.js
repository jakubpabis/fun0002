import React, {Component} from 'react';
import { connect } from 'react-redux';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SideBar from '../components/SideBar';
import Modals from '../components/Modals';
import TopBar from '../components/TopBar';
import Home from '../components/Home';
import Kupuj from '../components/Kupuj';
import Sprzedaj from '../components/Sprzedaj';
import News from '../components/News';
import New from '../components/New';

import { setModalsToggle } from '../actions';

const mapStateToProps = state => {
  return {
    modalsToggle: state.modalsToggle
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onModalsToggle: () => dispatch(setModalsToggle())
  }
}

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
    const {onModalsToggle} = this.props;

    return (
      <div className="App" >
        <Router>
          <SideBar modalsToggle={onModalsToggle} />
          <Modals />
          <div className="main-content">
              <TopBar />
              <Switch>
               <Route path="/" exact component={Home} />
                <Route path="/kupuj" component={Kupuj} />
                <Route path="/sprzedaj" component={Sprzedaj} />
                <Route path="/new" component={New} />
                <Route path="/news" component={News} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);