import React, { useState } from 'react';
import styled from 'styled-components';
import BurgerButton from './BurgerButton';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }

    return(
        <NavContainer>
            <h2>
                Lucas <span>Droguett</span>
            </h2>
            <div className={`links ${clicked ? 'active' : '' }`}>
                <a onClick={handleClick} href='#home'>Home</a>
                <a onClick={handleClick} href='#projects'>Projects</a>
                <a onClick={handleClick} href='#skills'>Skills</a>
                <a onClick={handleClick} href='#about-me'>About me</a>
            </div>
            <div className='burger'>
                <BurgerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <Bgdiv className={`initial ${clicked ? 'acitve' : ''}`} ></Bgdiv>
        </NavContainer>
    );
}

const NavContainer = styled.nav`
    h2 {
        font-weight: 400;
        color: white;
        span {
            font-weight: bold;
        }
    }
    padding: .4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1E1959;
        a {
        text-decoration: none;
        margin-right: 1rem;
        color: white;
    }

    .links{
        position: absolute;
        top: -700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .6s ease;
        a{
            color: black;
            font-size: 2rem;
            display: block;
        }

        @media(min-width: 768px) {
            position: initial;
            margin: 0;
            a{
                font-size: 1rem;
                color: white;
                display: inline;
            }
        }
    }

    .links.active {
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a {
            font-size: 2rem;
            margin-top: 1rem;
            color: white;
        }
    } 

    .burger {
        @media (min-width: 768px) {
            display: none;
        }
    }
`;

const Bgdiv = styled.div`
    position: absolute;
    background-color: black;
    top: -7000;
    left: -2000;
    transition: all .6s ease;
    &.acitve {
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;
        width: 100%;    
        height: 100%;
        z-index: -1;
    }
`

export default Navbar;