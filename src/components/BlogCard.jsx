import React, { Component } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

//Material-UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";

const CardDisplay = styled(motion(Card))`
  && {
    background-color: ${({ theme }) => theme.cardColor};
  }
`;

const Header = styled(CardHeader)`
  && {
    color: ${({ theme }) => theme.text};
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;
const Read = styled.span`
  right: 0;
  left: auto;
  color: ${({ theme }) => theme.text};
`;
class BlogCard extends Component {
  state = {};
  render() {
    const {
      article: {
        canonical_url,
        readable_publish_date,
        description,
        reading_time_minutes,
        title,
      },
    } = this.props;
    return (
      <Grid item sm={6} md={4}>
        <CardDisplay whileHover={{ scale: 1.1 }}>
          <Header title={title} subheader={readable_publish_date} />
          <Link href={canonical_url} target="_blank" rel="noopener noreferrer">
            <CardActionArea>
              <CardContent>
                <p>{description}</p>
              </CardContent>
            </CardActionArea>
          </Link>
          <CardActions>
            <Read>{reading_time_minutes} minute(s) read</Read>
          </CardActions>
        </CardDisplay>
      </Grid>
    );
  }
}

export default BlogCard;
