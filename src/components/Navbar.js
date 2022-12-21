import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import BurgerButton from './BurgerButton';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }

    const handleClickLink = () => {
        if(clicked) {
            setClicked(false);
        }
    }

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -38; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return(
        <NavContainer>
            <HashLink smooth scroll={scrollWithOffset} to='/#'>
                <h2>
                Lucas <span>Droguett</span>
                </h2>
            </HashLink>
            <div className={`links ${clicked ? 'active' : '' }`}>
                <HashLink smooth to='/#'scroll={scrollWithOffset} onClick={ handleClickLink }>Home</HashLink>
                <HashLink smooth to='/#skills' scroll={scrollWithOffset } onClick={ handleClickLink }>Skills</HashLink> 
                <HashLink smooth to='/#projects' scroll={scrollWithOffset} onClick={ handleClickLink }>Projects</HashLink>
                <HashLink smooth to='/#about' scroll={scrollWithOffset} onClick={ handleClickLink }>About me</HashLink>
            </div>
            <div className='burger'>
                <BurgerButton clicked={clicked} handleClick={handleClick}/>
            </div>
            <Bgdiv className={`initial ${clicked ? 'active' : ''}`} ></Bgdiv>
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
    position: fixed;
    width: 100%;
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
        @media(max-width: 768px) {
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
    @media(max-width: 768px){
        &.active {
            border-radius: 0 0 80% 0;
            top: 0;
            left: 0;
            width: 100%;    
            height: 100%;
            z-index: -1;
        }
    }
`

export default Navbar;