import React, {Component} from "react";
import {
  motion
} from "framer-motion";
import styled from "styled-components"
import ProjectUI from '../components/ProjectUI';

//Material-UI
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';

// images

import Scrwld_1 from "../images/Projects/Scrwld/Scrwld_1.png"
import Scrwld_2 from "../images/Projects/Scrwld/Scrwld_2.png"
import Scrwld_3 from "../images/Projects/Scrwld/Scrwld_3.png"
import Scrwld_4 from "../images/Projects/Scrwld/Scrwld_4.png"
import Scrwld_5 from "../images/Projects/Scrwld/Scrwld_5.png"

import Recruitr_1 from "../images/Projects/Recruitr/Recruitr_1.png"
import Recruitr_2 from "../images/Projects/Recruitr/Recruitr_2.png"
import Recruitr_3 from "../images/Projects/Recruitr/Recruitr_3.png"
import Recruitr_4 from "../images/Projects/Recruitr/Recruitr_4.png"
import Recruitr_5 from "../images/Projects/Recruitr/Recruitr_5.png"


const data= [
  {
    name: "SCRWLD",
    about: "A social-media web app for writers to like and comment on other's posts, save a writeup as a draft or post on the timeline and jot down the ideas using notes.",
    link: "http://scrwld.com",
    images: [
      Scrwld_1,
      Scrwld_2,
      Scrwld_3,
      Scrwld_4,
      Scrwld_5
    ]
  },
  {
    name: "RECRUITR",
    about: "A HR platform for hiring talents around the world where admin can add a job post and users can apply for the jobs.",
    link: "https://recruitr.netlify.app",
    images: [
      Recruitr_1,
      Recruitr_2,
      Recruitr_3,
      Recruitr_4,
      Recruitr_5
    ]
  }
]

const MainContainer = styled(motion.div)`
    height: auto;
    width: 100vw;
`
const PageHeader = styled(motion.p)`
  color: ${({ theme }) => theme.text};
  font-family: "Comic Sans MS", Helvetica, sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: center
`

class Projects extends Component {
  state = {  }
  render() { 

    const renderProjects = data.map(doc =><ProjectUI name={doc.name} about={doc.about} link={doc.link} images={doc.images} />)

    return (
      <MainContainer id="Projects">
        <PageHeader>Projects</PageHeader>
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