import React from 'react';
import styled from 'styled-components';

const Home = () => {
    return(
        <section id='home'>    
            <StyledHome>
                <div className='home-greeting'>
                    <p>Hi there! I'm</p>
                    <p><span>Lucas Droguett</span>, </p>
                    <p>a <span>Front-end Developer</span> from <span>Chile</span>. </p>

                </div>
                <div className='home-img-container'>
                    <img src={require('../img/florid-software-developer.png')} alt='foto-personal'/>
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
    height: 90vh;
    background-color: #5F9AFA;

    div  {
        width: 50%;
        height: 80%;
        align-items: center;
        justify-content: center;
        color: #F0E9D2;
        padding: 1rem;
        margin: 1rem;
        display: flex;
        
        img  {
            width: 60%;
            height: 80%;
            
        }
    }

`
export default Home;