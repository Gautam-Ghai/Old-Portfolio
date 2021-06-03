import React from 'react';

import { motion } from "framer-motion";
import styled from "styled-components"

const HireMeButton = styled(motion.button)`
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

const HireMe = () => {
    return (  
        <a href="mailto:gautamghai99@gamil.com">
            <HireMeButton 
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.8 }} 
                initial={{ y: 250}} 
                animate={{ y: 0}}
                >
                    <b>Contact Me</b>
                </HireMeButton>
        </a>
    );
}
 
export default HireMe;