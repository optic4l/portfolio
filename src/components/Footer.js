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
    background-color: blue;

`

export default Footer;