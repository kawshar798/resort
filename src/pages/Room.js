import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

const Room = () => {
    return (
        <div>
          <Hero hero="roomsHero">
            
                <Banner title="Our rooms" />
                
            </Hero>
        </div>
    );
};

export default Room;