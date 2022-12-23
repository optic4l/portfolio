import React from 'react';
import styled from 'styled-components';

const Projects = ()=> {
    return(
        <div id='projects'>
        <StyledProjects>
            <h1>Projects</h1>
            <div className='projects-container'>
                <div className='project'>Project1</div>
                <div className='project'>Project2</div>
                <div className='project'>Project3</div>
            </div>
        </StyledProjects>
        </div>
    );
}
const StyledProjects = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    background-color: #F0E9D2;
    color: #black;
    align-items: center;

    h1 {
        font-size: 3rem;
        font-weight: 400;
        padding: 1rem;
    }

    .projects-container {
        display: flex;
        flex-direction: row;
    }

    .project {
        width: 150px;
        height: 200px;
        border: 1px solid black;
        margin: 1rem;
        padding: 1rem;
        align-items: center;
        justify-content: center;
    }

`
export default Projects;