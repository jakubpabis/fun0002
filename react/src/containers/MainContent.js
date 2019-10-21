import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Home from '../components/Home';
import Kupuj from '../components/Kupuj';
import Sprzedaj from '../components/Sprzedaj';

export default class MainContent extends Component {
    render() {
        return (
                <div className="main-content">
                    <TopBar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/kupuj" component={Kupuj} />
                        <Route path="/sprzedaj" component={Sprzedaj} />
                    </Switch>
                </div>
        )
    }
}
