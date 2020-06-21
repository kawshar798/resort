import React from 'react';
import styled from "styled-components";
const Banner = ({children,title,subtitle}) => {
    return (
        <BannerWrap className="banner">
            <h2>{title}</h2>
             <p>{subtitle}</p>
             {children}
        </BannerWrap>
    );
};

const BannerWrap = styled.div`
display: contents;

    h2{
        font-size: 60px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    }
    P{
        font-size: 30px;
    color: #fff;
    font-weight: 600;
    letter-spacing: 2.5px;
    }
    button{
        display: block;
    border: 2px solid red;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;
    background: transparent;
    border-radius: 2px;
    cursor: pointer;
    margin-top: 30px;
    }

`
export default Banner;