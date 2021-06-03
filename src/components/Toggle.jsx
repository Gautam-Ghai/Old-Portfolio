import React from 'react'
import styled from 'styled-components';
import { ReactComponent as SunIcon } from '../images/sun.svg';
import { ReactComponent as MoonIcon } from '../images/moon.svg';
import { motion } from "framer-motion";

const ToggleContainer = styled(motion.button)`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 6rem;
  height: 3rem;
  margin-right: 0;
  margin-left: auto;
  outline: none;

  svg {
    height: auto;
    width: 2rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(0)' : 'translateX(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      width: 1.75rem;
      transform: ${({ lightTheme }) => lightTheme ? 'translateX(-100px)' : 'translateX(0)'};
    }
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer 
      onClick={toggleTheme} 
      lightTheme={isLight} 
      initial={{ y: -250}} 
      animate={{ y: 0}}
      transition={{duration: 0.5}}
      >
        <SunIcon />
        <MoonIcon />
    </ToggleContainer>
  );
};

export default Toggle;