import React, { Component } from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cards />
            </div>
        )
    }
}
