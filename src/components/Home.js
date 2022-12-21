import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return(
        <section id='home'>    
            <StyledHome>
                <div className='home-greeting'>
                    saludo!
                </div>
                <div className='home-img-container'>
                    <img alt='foto-personal'/>
                </div>
            </StyledHome>
        </section>
    )
}

const StyledHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80vh;
    background-color: #0F0E17;

`
export default Home;