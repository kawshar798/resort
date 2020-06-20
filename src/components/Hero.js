import React from 'react';

const Hero = ({hero,children}) => {
    return (
        <header className={hero}>
            
        </header>
    );
};
Hero.defaultProps = {
    hero:"defaultHero"
}

export default Hero;