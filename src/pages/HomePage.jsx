import React from 'react';
import logo from "../images/cadb59d95.png"
import HireMe from "../components/HireMe"
import Toggle from '../components/Toggle';
import { motion, useMotionValue, useTransform} from "framer-motion";
import styled from "styled-components"
import Header from "../components/Header"
import Particles from 'react-particles-js';

const Circle = styled(motion.div)`
width: 225px;
height: 225px;
background-color: ${({ theme }) => theme.button};
border-radius: 50px;
-moz-border-radius: 150px;
-webkit-border-radius: 150px;
margin-left: 1em;
position: relative;
margin-left: auto;
margin-right: auto;
&:hover{
    cursor: grab
}
`;

const LogoContainer = styled(motion.div)`
width: auto;
height: 225px;
positon: absolute;
z-index: 99;
user-select: none;
`

const Logo = styled(motion.img)`
height: 150px;
width: auto;
margin-top: 50px;
-webkit-user-drag: none;
-khtml-user-drag: none;
-moz-user-drag: none;
-o-user-drag: none;
user-drag: none;
`
const Text = styled(motion.p)`
font-size: 25px
`
const HeadLine = styled(motion.p)`
font-size: 30px;
font-weight: bold;
`

const Home = styled.div`
position: relative;
height: 97.5vh;
width: 97.5vw;
`

const Middle = styled.div`
  position: absolute;
  min-width: 350px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center
`
const HomePage = (props) => {

  const backGround = (props.theme === 'light') ? (
    <Particles
    params={{
	    particles: {
	        number: {
	            value: 160,
	            density: {
	                enable: false
	            }
	        },
	        size: {
	            value: 3,
	            random: true,
	            anim: {
	                speed: 4,
	                size_min: 0.3
	            }
	        },
	        line_linked: {
	            enable: false
	        },
	        move: {
	            random: true,
	            speed: 1,
	            direction: "top",
	            out_mode: "out"
	        },
          color: {
            value: "#000000",
          }
	    },
	    interactivity: {
	        events: {
	            onhover: {
	                enable: true,
	                mode: "bubble"
	            },
	            onclick: {
	                enable: true,
	                mode: "repulse"
	            }
	        },
	        modes: {
	            bubble: {
	                distance: 250,
	                duration: 2,
	                size: 0,
	                opacity: 0
	            },
	            repulse: {
	                distance: 400,
	                duration: 4
	            }
	        }
	    },
      
	}} 
  width="100%"
  height="80vh"/>
  ) : (
    <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 150, 
              density: { 
                enable: true, 
                value_area: 1500, 
              } 
            },
            color: {
              value: "#ffffff",
            },
            size: {
	            value: 3
	        }
          },
          interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                }
            }
        }
        }}
        
        width="100%"
        height="80vh"
        /> 
  )

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <Home id="Home">  
        <Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
             {backGround}
            <Middle>
            <Circle 
                initial={{ opacity: 0}} 
                animate={{ opacity: 1}} 
                transition={{duration: 0.5}}
                style={{x,y, rotateX, rotateY, z:100}}
                drag
                dragElastic={0.4}
                dragConstraints={{ left: 0, top: 0 , right: 0, bottom: 0}}
                whileTap={{ cursor: "grabbing"}}
                >
                    <LogoContainer
                     style={{x,y, rotateX, rotateY, z:100000}}
                     drag
                     dragConstraints={{ left: 0, top: 0 , right: 0, bottom: 0}}
                     dragElastic={0.2}
                     whileTap={{ cursor: "grabbing"}}
                    >
                    <Logo 
                    src={logo} 
                    alt="Profile Image" 
                    initial={{ y: -250}} 
                    animate={{ y: 0}}
                    transition={{duration: 0.5}}
                    />
                    </LogoContainer>
            </Circle>
            <Text 
                initial={{ x: -250}} 
                animate={{ x: 0}} 
                transition={{duration: 0.5}}
                >
                Hi, I am Gautam!
            </Text>
            <HeadLine 
                initial={{ x: 250}} 
                animate={{ x: 0}}
                transition={{duration: 0.5}}
                >
                Designing, Developing & Deploying web related solutions
            </HeadLine>
            <Text
            initial={{ x: -250}} 
            animate={{ x: 0}}
            transition={{duration: 0.5}}
            >
                a Full-Stack Developer who loves to build things around JavaScript!
            </Text>
            <HireMe />
            </Middle>
            <Header />
        </Home>
    );
}
 
export default HomePage;