import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import useScript from '../hooks/useScript';


const Home = () => {
    useScript(`${process.env.PUBLIC_URL}/assets/js/theme.min.js`);
    // useEffect(() =>  {
    //     window.$('[data-toggle="tooltip"]').tooltip();
    //   })
    return (
        <div>
            <Header />
            <Cards />
        </div>
    )
}

export default Home;
