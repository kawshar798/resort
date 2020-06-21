import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import { setColor, setFont, setRem } from "../style";
import { FaBars, FaTimes } from "react-icons/fa";
import Container from './Container';

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
        console.log("click me");
    }

    return (

        <HeaderWrapper>
            <Container>
                <nav>
                    <div className="logo">
                        <img src="http://rockstheme.com/rocks/live-nishflu/img/logo/logo2.png" alt="logo" />
                    </div>

                    <div className="main-menu">
                        <ul className={open ? 'show' : ''}>
                            <li> <Link to="/">Home</Link> </li>
                            <li> <Link to="/about-us">About us</Link> </li>
                            <li> <Link to="/contact-us">Contact Us</Link> </li>
                        </ul>
                        <button  className="menu-icon" onClick={handleToggle}><FaBars /> </button>
                    </div>


                </nav>
            </Container>
        </HeaderWrapper>

    );
};
const HeaderWrapper = styled.header`
    position: absolute;
    z-index: 9;
    background: rebeccapurple;
    width: 100%;
    nav{
        display: flex;
    justify-content: space-between;
    .main-menu{
        display: flex;
    align-items: center;
    align-items: center;
    .menu-icon{
        display:none;
    }
    }
    }
    ul{
        list-style: none;
        /* background: ${setColor.primaryColor}; */
        display: flex;
   
        
       a {
        background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
    color: #fff;
    font-size: 17px;
    font-weight: 600;
    padding: 33px 15px;
    text-transform: capitalize;
    position: relative;
         }
        
    }
    

`;
export default Header;