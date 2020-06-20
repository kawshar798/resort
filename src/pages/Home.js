import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Hero>
                <Banner title="laxurious rooms" subtitle="deluxe rooms starting at $299">
                 <Link to="/rooms" className="btn-primary" >our rooms</Link></Banner>
            </Hero>
        </div>
    );
};

export default Home;