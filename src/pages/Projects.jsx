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

import scrwld from "../images/Projects/scrwld.PNG"
import recruitr from "../images/Projects/recruitr.PNG"
import weather from "../images/Projects/weather.PNG"
import pokemon from "../images/Projects/pokemon.PNG"
import color from "../images/Projects/color.PNG"
import geolocation from "../images/Projects/geolocation.PNG"
import generalstore from "../images/Projects/generalstore.PNG"
import admin from "../images/Projects/admin.PNG"


const data= [
  {
    name: "Weather App",
    about: "A mobile first application developed to find the weather related details of any place",
    link: "https://gautamghai-weatherapp.netlify.app",
    image: weather,
    code: "https://github.com/Gautam-Ghai/weather-app"
  },
  {
    name: "SCRWLD",
    about: "A social-media web app for writers to like and comment on other's posts, save a writeup as a draft or post on the timeline and jot down the ideas using notes.",
    link: "http://scrwld.com",
    image: scrwld
  },
  {
    name: "RECRUITR",
    about: "A HR platform for hiring talents around the world where admin can add a job post and users can apply for the jobs.",
    link: "https://recruitr.netlify.app",
    image: recruitr,
    code: "https://github.com/Gautam-Ghai/recruitr"
  },
  {
    name: "Admin Portal",
    about: "A fully responsive UI example for an admin portal",
    link: "https://responsivedashboard.netlify.app",
    image: admin,
    code: "https://github.com/Gautam-Ghai/responsiveDashboard"
  },
  {
    name: "General Store",
    about: "A minimalist website developed for a local business",
    link: "https://ghaigeneralstore.netlify.app",
    image: generalstore,
    code: "https://github.com/Gautam-Ghai/Shoe-Store"
  },
  {
    name: "Pokemon App",
    about: "A simple and responsive pokemon app made with react, css and graphql",
    link: "https://gautamghai-pokemonapp.netlify.app",
    image: pokemon,
    code: "https://github.com/Gautam-Ghai/PokemonApp"
  },
  {
    name: "Geolocation",
    about: "Work with goolge's geolocation api for a course work.",
    link: "https://gaitan1539.github.io",
    image: geolocation,
    code: "https://github.com/Gautam-Ghai/Geolocation"
  },
  {
    name: "Color Model",
    about: "Work with rgb and cmyk colors for a course work.",
    link: "https://gisgenius.github.io",
    image: color,
    code: "https://github.com/Gautam-Ghai/Color-Model"
  }
]

const MainContainer = styled(motion.div)`
    height: auto;
    width: 100vw;
    
`
const PageHeader = styled(motion.p)`
  color: ${({ theme }) => theme.text};
  font-family: "Source Sans Pro", sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: center
`

class Projects extends Component {
  state = {  }
  render() { 

    const renderProjects = data.map(doc =><ProjectUI name={doc.name} about={doc.about} link={doc.link} image={doc.image} code={doc.code}/>)

    return (
      <MainContainer id="Projects">
        <PageHeader>Projects</PageHeader>
        <Container maxWidth="lg">
        <Grid container spacing={2}>
          {renderProjects}
        </Grid> 
        </Container>
      </MainContainer>
    );
  }
}
 
export default Projects;