import React from "react";
import {
  motion
} from "framer-motion";
import styled from "styled-components"

//Material-UI
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

//Images
import HTML from "../images/Frontend/HTML.png";
import CSS from "../images/Frontend/CSS.png";
import Sass from "../images/Frontend/Sass.png";
import Bootstrap from "../images/Frontend/Bootstrap.png";
import MaterialUI from "../images/Frontend/MaterialUI.png";
import JavaScript from "../images/Frontend/JavaScript.png";
import JQuery from "../images/Frontend/JQuery.png";
import react from "../images/Frontend/React.png";
import Redux from "../images/Frontend/Redux.png";

import php from "../images/Backend/php.png"
import nodejs from "../images/Backend/nodejs.png"
import mysql from "../images/Backend/mysql.png"
import mongodb from "../images/Backend/mongodb.png"
import firebase from "../images/Backend/firebase.png"

const MainConatiner = styled.div`
    height: auto;
    width: 100vw;
`

const CardDisplay = styled(motion(List))`
&& {
    background-color: ${({ theme }) => theme.cardColor};
    cursor: pointer
  }
`
const Text = styled(ListItemText)`
&& {
    color: ${({ theme }) => theme.text};
  }
`
const Heading = styled(Paper)`
&& {
    background-color: ${({ theme }) => theme.cardColor};
    color: ${({ theme }) => theme.text};
    text-align: center
  }
`
const Logo = styled.img`
height: 25px;
width: auto;
`
const PageHeader = styled(motion.p)`
  color: ${({ theme }) => theme.text};
  font-family: "Source Sans Pro", sans-serif;
  font-size: 40px;
  font-weight: bold;
  text-align: center
`

function Skills() {
  return (

    <MainConatiner
      id="SkillSet"
    >
        <PageHeader>Skills</PageHeader>
        <Container maxWidth="lg" >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                        <Heading>
                            <h1>Front-End</h1>
                        </Heading>
                        <CardDisplay
                            whileHover={{ scale: 1.1 }}
                        >
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Logo src={HTML} alt="html"/>
                                    </ListItemIcon>
                                    <Text primary="HTML" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Logo src={CSS} alt="css"/>
                                    </ListItemIcon>
                                    <Text primary="CSS" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Logo src={Sass} alt="sass"/>
                                    </ListItemIcon>
                                    <Text primary="Sass" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Logo src={Bootstrap} alt="bootstrap"/>
                                    </ListItemIcon>
                                    <Text primary="Bootstrap" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Logo src={MaterialUI} alt="material-ui"/>
                                    </ListItemIcon>
                                    <Text primary="Material-UI" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Logo src={JavaScript} alt="javascript"/>
                                    </ListItemIcon>
                                    <Text primary="JavaScript" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Logo src={JQuery} alt="jquery"/>
                                    </ListItemIcon>
                                    <Text primary="JQuery" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Logo src={react} alt="react"/>
                                    </ListItemIcon>
                                    <Text primary="React" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Logo src={Redux} alt="redux"/>
                                    </ListItemIcon>
                                    <Text primary="Redux" />
                                </ListItem>
                        </CardDisplay>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Heading>
                            <h1>Back-End</h1>
                        </Heading>
                        <CardDisplay
                            whileHover={{ scale: 1.1 }}
                        >
                             <ListItem divider>
                                <ListItemIcon>
                                        <Logo src={php} alt="php"/>
                                    </ListItemIcon>
                                    <Text primary="PHP" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Logo src={nodejs} alt="nodejs"/>
                                    </ListItemIcon>
                                    <Text primary="Node.js" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Logo src={mysql} alt="mysql"/>
                                    </ListItemIcon>
                                    <Text primary="MySql" />
                                </ListItem>
                                <ListItem divider>
                                    <ListItemIcon>
                                        <Logo src={mongodb} alt="mongodb"/>
                                    </ListItemIcon>
                                    <Text primary="MongoDB" />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <Logo src={firebase} alt="firebase"/>
                                    </ListItemIcon>
                                    <Text primary="Firebase" />
                                </ListItem>
                        </CardDisplay>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <Heading>
                            <h1>Tools</h1>
                        </Heading>
                        <CardDisplay
                            whileHover={{ scale: 1.1 }}
                        >
                             <ListItem divider>
                                    <Text primary="Git" />
                                </ListItem>
                                <ListItem divider>
                                    <Text primary="VS Code" />
                                </ListItem>
                                <ListItem divider>
                                    <Text primary="Figma" />
                                </ListItem>
                                <ListItem divider>
                                    <Text primary="Jira" />
                                </ListItem>
                                <ListItem divider>
                                    <Text primary="Confluence" />
                                </ListItem>
                                <ListItem divider>
                                    <Text primary="WordPress" />
                                </ListItem>
                                <ListItem divider>
                                    <Text primary="Terminalfour" />
                                </ListItem>
                                <ListItem divider>
                                    <Text primary="Heroku" />
                                </ListItem>
                                <ListItem>
                                    <Text primary="Netlify" />
                                </ListItem>
                    </CardDisplay>
                    </Grid>
                </Grid>
                
                </Container>
    </MainConatiner>
  );
}

export default Skills