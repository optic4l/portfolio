import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return(
        <StyledFooter>
            <h1>Footer</h1>
        </StyledFooter> 
    );
}

const StyledFooter = styled.div`
    display: flex;
    height: 30vh;
    background-color: #000014;
    color: #F0E9D2;

`

export default Footer;