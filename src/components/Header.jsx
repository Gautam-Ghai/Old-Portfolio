import React from 'react';
import { Link } from "react-scroll";
import styled from "styled-components"
import { motion } from "framer-motion";

const Menu = ({className}) =>(
  <div className={className}>
      <motion.nav 
        className="head"
        initial={{ opacity: 0}} 
        animate={{ opacity: 1}}
        transition={{duration: 0.5}}>
            <ul className="head-content">
              <li className="head-item">
                <Link
                  activeClass="active"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="head_link"
                  >
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="header-icon">
                      <path d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0"/>
                    </svg>
                    <span className="header-head">Home</span>
                </Link>
                </li>
                <li className="head-item">
                <Link
                  activeClass="active"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="head_link"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"  className="header-icon">
                    <g>
	                    <g>
		                    <path d="M506.76,242.828l-118.4-125.44c-7.277-7.718-19.424-8.07-27.142-0.787c-7.706,7.277-8.064,19.43-0.781,27.142 l105.965,112.256L360.437,368.268c-7.283,7.712-6.925,19.859,0.781,27.142c3.712,3.501,8.454,5.235,13.178,5.235 c5.101,0,10.195-2.022,13.965-6.01l118.4-125.446C513.742,261.785,513.742,250.226,506.76,242.828z"/>
	                    </g>
                    </g>
                    <g>
	                    <g>
		                    <path d="M151.566,368.262L45.608,255.999l105.958-112.262c7.277-7.712,6.925-19.866-0.787-27.142 c-7.706-7.277-19.866-6.925-27.142,0.787l-118.4,125.44c-6.982,7.398-6.982,18.963,0,26.362L123.643,394.63 c3.776,4,8.864,6.016,13.965,6.016c4.723,0,9.466-1.741,13.171-5.242C158.498,388.127,158.843,375.974,151.566,368.262z"/>
	                    </g>
                    </g>
                    <g>
	                    <g>
		                    <path d="M287.061,52.697c-10.477-1.587-20.282,5.606-21.882,16.083l-56.32,368.64c-1.6,10.483,5.6,20.282,16.083,21.882 c0.986,0.147,1.958,0.218,2.925,0.218c9.325,0,17.504-6.803,18.957-16.301l56.32-368.64 C304.744,64.095,297.544,54.297,287.061,52.697z"/>
	                    </g>
                    </g>
                  </svg>
                  <span className="header-head">Projects</span>
                </Link>
              </li>
              <li className="head-item">
                <Link
                  activeClass="active"
                  to="SkillSet"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="head_link"
                  >
                  <svg id="Capa_1" enableBackground="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" className="header-icon">
                    <g>
                      <g>
                        <path d="m481.391 335.216c-27.202-27.201-67.294-36.966-103.749-25.745l-36.551-36.552 159.708-159.707c7.223-7.223 11.201-16.827 11.201-27.042s-3.978-19.82-11.201-27.042l-47.927-47.927c-7.223-7.224-16.827-11.201-27.042-11.201-10.216 0-19.819 3.977-27.042 11.201l-159.708 159.708-36.551-36.552c11.221-36.454 1.456-76.547-25.745-103.749-15.053-15.053-34.05-24.981-54.937-28.71-20.4-3.643-41.171-1.167-60.065 7.158-3.02 1.331-5.189 4.066-5.797 7.31-.607 3.243.424 6.578 2.758 8.912l47.709 47.708-33.729 33.728-47.709-47.707c-2.334-2.334-5.671-3.362-8.912-2.758-3.244.607-5.979 2.776-7.309 5.797-8.325 18.895-10.8 39.665-7.159 60.065 3.729 20.887 13.657 39.884 28.711 54.938 27.201 27.2 67.296 36.966 103.749 25.745l36.551 36.551s-91.74 91.74-122.32 122.321c-1.822 1.822-2.421 3.925-2.427 3.945l-43.551 131.405c-1.19 3.589-.253 7.543 2.421 10.216 1.906 1.905 4.461 2.929 7.072 2.929 1.052 0 2.113-.166 3.144-.508l131.278-43.508c2.064-.589 4.072-2.47 4.072-2.47l122.32-122.32 36.552 36.552c-11.221 36.454-1.456 76.548 25.745 103.75 15.053 15.053 34.05 24.98 54.937 28.71 6.114 1.092 12.259 1.634 18.378 1.634 14.301 0 28.454-2.962 41.686-8.792 3.02-1.331 5.189-4.066 5.797-7.31.607-3.243-.424-6.578-2.758-8.912l-47.709-47.708 33.729-33.729 47.708 47.708c2.334 2.334 5.669 3.37 8.912 2.758 3.244-.607 5.979-2.776 7.309-5.797 8.325-18.895 10.801-39.665 7.159-60.065-3.727-20.888-13.655-39.884-28.708-54.938zm-68.461-309.873c3.446-3.446 8.027-5.344 12.9-5.344s9.454 1.897 12.9 5.344l47.927 47.927c3.445 3.445 5.343 8.026 5.343 12.9 0 4.873-1.898 9.455-5.344 12.9l-32.447 32.447-73.726-73.727zm-269.104 158.9c-1.91-1.91-4.467-2.929-7.073-2.929-1.188 0-2.388.212-3.539.648-30.698 11.624-65.526 4.146-88.729-19.057-20.932-20.932-28.988-50.46-22.26-78.403l43.425 43.426c3.905 3.904 10.237 3.904 14.142 0l47.871-47.871c3.905-3.905 3.905-10.237 0-14.142l-43.425-43.425c27.941-6.73 57.47 1.328 78.403 22.26 23.203 23.203 30.683 58.031 19.057 88.728-1.393 3.679-.501 7.832 2.28 10.613l40.959 40.959-40.152 40.152zm-116.231 300.162 14.465-43.648 29.181 29.181zm64.891-21.506-43.385-43.385 10.686-32.244 64.942 64.942zm50.778-20.437-29.792-29.792 97.884-97.884c3.905-3.905 3.905-10.237 0-14.142-3.904-3.904-10.237-3.904-14.142 0l-97.884 97.884-29.793-29.792 296.804-296.804.807.807 28.984 28.985-134.99 134.991c-3.905 3.905-3.905 10.237 0 14.142 1.952 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l134.99-134.991 29.792 29.793zm346.245-14.701-43.425-43.425c-1.875-1.875-4.419-2.929-7.071-2.929s-5.196 1.054-7.071 2.929l-47.87 47.871c-3.905 3.905-3.905 10.237 0 14.142l43.425 43.426c-27.945 6.727-57.471-1.328-78.403-22.26-23.203-23.203-30.683-58.031-19.057-88.729 1.393-3.679.501-7.832-2.281-10.613l-40.959-40.959 40.152-40.152 40.96 40.96c2.781 2.781 6.933 3.675 10.613 2.28 30.695-11.626 65.525-4.146 88.728 19.057 20.932 20.932 28.988 50.46 22.259 78.402z"/><g><path d="m236.378 285.621c-4.181 0-7.997-2.71-9.405-6.636-1.388-3.872-.2-8.321 2.936-10.987 3.276-2.785 8.092-3.113 11.745-.869 3.506 2.154 5.319 6.422 4.523 10.442-.913 4.615-5.092 8.05-9.799 8.05z"/></g>
                      </g>
                    </g>
                  </svg>
                  <span className="header-head">Skills</span>
                </Link>
              </li>
              <li className="head-item">
                <Link
                  activeClass="active"
                  to="Blog"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="head_link"
                  >
                    <svg viewBox="0 0 500 475 " xmlns="http://www.w3.org/2000/svg" className="header-icon">
                      <path d="m67.179688 48.394531h-.101563c-5.523437 0-10 4.476563-10 10 0 5.523438 4.476563 10 10 10h.101563c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10zm0 0"/>
                      <path d="m116.710938 48.394531h-.101563c-5.523437 0-10 4.476563-10 10 0 5.523438 4.476563 10 10 10h.101563c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10zm0 0"/>
                      <path d="m166.242188 48.394531h-.101563c-5.523437 0-10 4.476563-10 10 0 5.523438 4.476563 10 10 10h.101563c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10zm0 0"/>
                      <path d="m444.308594 48.394531h-192.929688c-5.523437 0-10 4.476563-10 10 0 5.519531 4.476563 10 10 10h192.929688c5.523437 0 10-4.480469 10-10 0-5.523437-4.476563-10-10-10zm0 0"/>
                      <path d="m262.890625 452.4375c-2.628906 0-5.199219 1.070312-7.070313 2.929688-1.859374 1.859374-2.929687 4.441406-2.929687 7.070312s1.070313 5.210938 2.929687 7.070312c1.871094 1.859376 4.441407 2.929688 7.070313 2.929688s5.210937-1.070312 7.070313-2.929688c1.867187-1.859374 2.929687-4.441406 2.929687-7.070312s-1.0625-5.210938-2.929687-7.070312c-1.859376-1.859376-4.441407-2.929688-7.070313-2.929688zm0 0"/>
                      <path d="m480.230469.5h-448.460938c-17.515625 0-31.769531 14.253906-31.769531 31.769531v408.398438c0 17.519531 14.253906 31.769531 31.769531 31.769531h189.230469c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-189.230469c-6.488281 0-11.769531-5.277344-11.769531-11.769531v-324.378907h472v324.378907c0 6.488281-5.28125 11.769531-11.769531 11.769531h-176.5625c-5.523438 0-10 4.476562-10 10s4.476562 10 10 10h176.5625c17.515625 0 31.769531-14.25 31.769531-31.769531v-408.398438c0-17.515625-14.253906-31.769531-31.769531-31.769531zm-460.230469 95.785156v-64.015625c0-6.488281 5.28125-11.769531 11.769531-11.769531h448.460938c6.488281 0 11.769531 5.28125 11.769531 11.769531v64.019531h-472zm0 0"/>
                      <path d="m178.039062 230.5c0-19.851562-16.148437-36-36-36h-33.667968c-5.523438 0-10 4.476562-10 10v104c0 5.523438 4.476562 10 10 10h33.667968c19.851563 0 36-16.148438 36-36 0-10.214844-4.28125-19.441406-11.140624-26 6.859374-6.558594 11.140624-15.785156 11.140624-26zm-20 52c0 8.820312-7.179687 16-16 16h-23.667968v-32h23.667968c8.820313 0 16 7.175781 16 16zm-39.667968-36v-32h23.667968c8.824219 0 16 7.179688 16 16s-7.175781 16-16 16zm0 0"/>
                      <path d="m206.648438 194.5c-5.523438 0-10 4.476562-10 10v80.871094c0 18.269531 14.863281 33.128906 33.128906 33.128906 5.523437 0 10-4.476562 10-10s-4.476563-10-10-10c-7.238282 0-13.128906-5.890625-13.128906-13.128906v-80.871094c0-5.523438-4.476563-10-10-10zm0 0"/>
                      <path d="m324.867188 282.289062c0-19.96875-16.242188-36.214843-36.210938-36.214843s-36.210938 16.246093-36.210938 36.214843 16.246094 36.210938 36.210938 36.210938c19.96875 0 36.210938-16.242188 36.210938-36.210938zm-52.421876 0c0-8.941406 7.273438-16.214843 16.210938-16.214843s16.210938 7.273437 16.210938 16.214843c0 8.9375-7.269532 16.210938-16.210938 16.210938s-16.210938-7.273438-16.210938-16.210938zm0 0"/>
                      <path d="m377.414062 346.5c-8.9375 0-16.210937-7.273438-16.210937-16.210938 0-5.523437-4.476563-10-10-10s-10 4.476563-10 10c0 19.96875 16.246094 36.210938 36.210937 36.210938 19.96875 0 36.214844-16.242188 36.214844-36.210938v-48c0-19.96875-16.246094-36.214843-36.214844-36.214843-19.964843 0-36.210937 16.246093-36.210937 36.214843s16.246094 36.210938 36.210937 36.210938c5.828126 0 11.332032-1.390625 16.214844-3.847656v15.636718c0 8.9375-7.273437 16.210938-16.214844 16.210938zm0-48c-8.9375 0-16.210937-7.273438-16.210937-16.210938 0-8.941406 7.273437-16.214843 16.210937-16.214843 8.941407 0 16.214844 7.273437 16.214844 16.214843 0 8.9375-7.273437 16.210938-16.214844 16.210938zm0 0"/>
                      <path d="m108.371094 416.5h295.257812c5.523438 0 10-4.476562 10-10s-4.476562-10-10-10h-295.257812c-5.519532 0-10 4.476562-10 10s4.480468 10 10 10zm0 0"/>
                      </svg>
                    <span className="header-head">Blog</span>
                </Link>
              </li>
              <li className="head-item">
                <Link
                  activeClass="active"
                  to="WorkExp"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="head_link"
                  >
                  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="header-icon">
                    <path d="m497.09375 60.003906c-.03125 0-.0625-.003906-.09375-.003906h-136v-15c0-24.8125-20.1875-45-45-45h-120c-24.8125 0-45 20.1875-45 45v15h-136c-8.351562 0-15 6.84375-15 15v330c0 24.8125 20.1875 45 45 45h422c24.8125 0 45-20.1875 45-45v-329.683594c0-.019531 0-.039062 0-.058594-.574219-9.851562-6.632812-15.199218-14.90625-15.253906zm-316.09375-15.003906c0-8.269531 6.730469-15 15-15h120c8.269531 0 15 6.730469 15 15v15h-150zm295.1875 45-46.582031 139.742188c-2.042969 6.136718-7.761719 10.257812-14.226563 10.257812h-84.378906v-15c0-8.285156-6.714844-15-15-15h-120c-8.285156 0-15 6.714844-15 15v15h-84.378906c-6.464844 0-12.183594-4.121094-14.226563-10.257812l-46.582031-139.742188zm-175.1875 150v30h-90v-30zm181 165c0 8.269531-6.730469 15-15 15h-422c-8.269531 0-15-6.730469-15-15v-237.566406l23.933594 71.796875c6.132812 18.40625 23.289062 30.769531 42.6875 30.769531h84.378906v15c0 8.285156 6.714844 15 15 15h120c8.285156 0 15-6.714844 15-15v-15h84.378906c19.398438 0 36.554688-12.363281 42.6875-30.769531l23.933594-71.796875zm0 0"/>
                  </svg>
                  <span className="header-head">Work-Experince</span>
                </Link>
                
              </li>
            </ul>
          </motion.nav>        
  </div>
)

const MenuBar = styled(Menu)`
.head {
  background-color: ${({ theme }) => theme.background};
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  z-index: 1000;
}

.head-content {
  max-width: 900px;
  padding: 0rem 3rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.head-item {
  display: inline;
}

.head-item > .active {
  color: #2196f3 !important;
  .header-icon {
    fill: #2196f3 !important;
    stroke: #2196f3 !important;
  }
}

.head_link {
  margin-top: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  -webkit-box-pack: justify;
  justify-content: space-between;
  &:hover {
    color: #757575;
    text-decoration: none;
  }
  &:hover .header-icon {
    fill: #757575;
    stroke: #757575;
  }
}

.header-icon {
  width: 3em;
  height: 1.5em;
  fill: ${({ theme }) => theme.text};
  stroke-width: 5;
  stroke: ${({ theme }) => theme.text};
}

@media (max-width: 800px) {
  .header-head {
    font-size: 0px;
  }
  .header-icon {
    width: 1.5em;
  }
}

`

const Header = ({className}) => {
    return (
          <MenuBar />
    );
}
 
export default Header;