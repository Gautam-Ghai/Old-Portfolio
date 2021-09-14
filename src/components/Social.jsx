import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaDev} from "react-icons/fa";
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 0.5rem;
  z-index: 10;
  transform: translateY(-50%);
  ul {
    display: block;
    list-style-type: none;
  }
  .item + .item {
    margin-top: 1rem;
  }
  a {
    font-size: 2rem;
    color: ${({ theme }) => theme.text};;
    transition: 0.2s ease-in;
    &:hover {
      color: #2196f3;
    }
  }
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
function Socail() {
  return (
    <Social>
      <ul>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/gautam-ghai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/Gautam-Ghai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="item">
          <a
            href="https://twitter.com/_gautamghai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li className="item">
          <a
            href="https://dev.to/gautamghai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDev />
          </a>
        </li>
      </ul>
    </Social>
  );
}

export default Socail;