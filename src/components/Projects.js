import React from 'react';
import styled from 'styled-components';

const Projects = ()=> {
    return(
        <div id='projects'>
        <StyledProjects>
            <h1>Projects</h1>
        </StyledProjects>
        </div>
    );
}
const StyledProjects = styled.div`
    display: flex;
    height: 90vh;
    background-color: #678983;
    color: #F0E9D2;

`
export default Projects;