import React, { Component, Fragment } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import BrowserWindow from "./BrowserWindow";

//Material-UI
import Grid from "@material-ui/core/Grid";

const Button = styled(motion.button)`
  background-color: ${({ theme }) => theme.button};
  color: #f5f7fa;
  border-radius: 30px;
  border: none;
  width: 150px;
  height: 50px;
  outline: none;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const HeadLine = styled(motion.p)`
  font-size: 20px;
  font-weight: bold;
`;

class ProjectUI extends Component {
  state = {};
  render() {
    const { name, image, about, link, code } = this.props;
    return (
      <Fragment>
        <Grid item xs={12} md={6}>
          <BrowserWindow link={link} image={image}></BrowserWindow>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <HeadLine>{name}</HeadLine>
          <p>{about}</p>
          <div>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <b>Demo</b>
              </Button>
            </a>
            <a href={code} target="_blank" rel="noopener noreferrer">
              {code && (
                <Button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                  <b>Code</b>
                </Button>
              )}
            </a>
          </div>
        </Grid>
      </Fragment>
    );
  }
}

export default ProjectUI;
