import React, { useEffect } from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';

import loadScripts from '../loadScripts';

const Home = () => {
    useEffect(() => {
        loadScripts()
    })
    return (
        <div>
            <Header />
            <Cards />
        </div>
    )
}

export default Home;
