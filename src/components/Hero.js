import React from 'react';
import styled from "styled-components"
const Hero = ({children}) => {
    return (
        <HeroWrap className="hero">
           {children}
        </HeroWrap>
    );
};

const HeroWrap = styled.div`

background:url("https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666_960_720.jpg");
background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 1;
    &::after{
        background: rgba(0,0,0,.8);
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    opacity: .5;
    z-index: -1;
    }

`;
export default Hero;