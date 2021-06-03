import React, {Component} from "react";
import {
  motion
} from "framer-motion";
import styled from "styled-components"
import Slider from 'infinite-react-carousel';
import ProjectUI from '../components/ProjectUI';

//Material-UI
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';

// images

import Scrwld_1 from "../images/Projects/Scrwld/Scrwld_1.png"
import Scrwld_2 from "../images/Projects/Scrwld/Scrwld_2.png"
import Scrwld_3 from "../images/Projects/Scrwld/Scrwld_3.png"
import Scrwld_4 from "../images/Projects/Scrwld/Scrwld_4.png"

const data= [
  {
    name: "SCRWLD",
    about: "A social-media web app for writers to like and comment on other's posts, save a writeup as a draft or post on the timeline and jot down the ideas using notes.",
    link: "http://scrwld.com",
    images: [
      Scrwld_1,
      Scrwld_2,
      Scrwld_3,
      Scrwld_4
    ]
  }
]

const MainContainer = styled(motion.div)`
    height: 100vh;
    width: 100vw;
`

class Projects extends Component {
  state = {  }
  render() { 

    const renderProjects = data.map(doc =><ProjectUI name={doc.name} about={doc.about} link={doc.link} images={doc.images} />)

    return (
      <MainContainer id="Projects">
        <Container maxWidth="md">
        <Grid container spacing={2}>
          {renderProjects}
        </Grid> 
        </Container>
      </MainContainer>
    );
  }
}
 
export default Projects;