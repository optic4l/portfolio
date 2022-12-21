import React from 'react';
import styled from 'styled-components';

const Skills = () => {
    return(
        <div id='skills'>
        <StyledSkills>
            <h1>Skills</h1>
        </StyledSkills>
        </div>
    )
}
const StyledSkills = styled.div`
    display: flex;
    height: 90vh;
    background-color: green;

`

export default Skills;