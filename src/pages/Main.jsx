import React from 'react';
import HomePage from './HomePage';

import Projects from "./Projects"
import styled from "styled-components"
import Blog from './Blog';
import Skills from "./Skills";
import Social from "../components/Social";

const Container = styled.div`
background-color: ${({ theme }) => theme.background};
color: ${({ theme }) => theme.text}
`;

const Main = (props) => {
    return (
        <Container>
                <HomePage theme={props.theme} toggleTheme={props.toggleTheme}/>
                <Projects />
                <Skills />
                <Blog />
                <Social />
        </Container>
    );
}
 
export default Main;
