import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';

const Home = () => {
    return (
        <Hero>
           <Banner title="Welcome to KAS" subtitle="Relax in our luxury Hotel">
               <button>go home</button>
           </Banner>
        </Hero>
    );
};

export default Home;