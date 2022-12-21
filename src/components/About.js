import React from 'react';
import styled from 'styled-components';

const About = () => {
    return(
        <section id='about'>
            <StyledAbout>
                <h1>About</h1>
            </StyledAbout>
        </section>
    );
}

const StyledAbout = styled.div`
    display: flex;
    height: 90vh;
    background-color: red;

`

export default About;