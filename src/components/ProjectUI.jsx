import React, {Component, Fragment} from "react";
import {
  motion
} from "framer-motion";
import styled from "styled-components"
import Slider from 'infinite-react-carousel';

//Material-UI
import Grid from '@material-ui/core/Grid'

const Button = styled(motion.button)`
  background-color: ${({ theme }) => theme.button};
  color: #f5f7fa;
  border-radius: 30px;
  border: none;
  width: 150px;
  height: 50px;
  outline: none;
  &:hover {
      cursor: pointer
  }
`

const HeadLine = styled(motion.p)`
font-size: 20px;
font-weight: bold;
`

const Image = styled.img`
  height: 170px;
  width: auto;
  border-radius: 15px;
  display: block;
  margin-left: auto;
  margin-right: auto
`

const ImgBlock = styled.div`
`

class ProjectUI extends Component {
    state = {  }
    render() { 
        const { name, images, about, link} = this.props;
        const settings =  {
            arrows: false,
            arrowsBlock: false,
            autoplay: true,
            dots: true
          };
        
          const renderImages = images.map(image => <ImgBlock>
            <Image src={image} />
          </ImgBlock>)
        return (
            <Fragment>
                <Grid item xs={12} md={6}>
          <Slider { ...settings }>
            {renderImages}
          </Slider>
          
          </Grid>
          <Grid item xs={12} md={6}>
              <HeadLine>{name}</HeadLine>
              <p>{about}</p>
              <a href={link}>
            <Button 
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.8 }}
                >
                    <b>Demo</b>
                </Button>
        </a>
          </Grid>
            </Fragment>
            
        );
    }
}
 
export default ProjectUI;