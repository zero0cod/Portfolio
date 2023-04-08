import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import ecom from "../img/ecom-small.png";
import rec from "../img/rec.png";
import vita from "../img/vita.png";
import stack from "../img/stack.png";
//page animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
const OurWork = () => {
  return (
    <Work
      exit="exit"
      variants={pageAnimation}
      style={{ background: "#fff" }}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}> </Frame1>
        <Frame2 variants={slider}> </Frame2>
        <Frame3 variants={slider}> </Frame3>
        <Frame4 variants={slider}> </Frame4>
      </motion.div>

      <Movie>
        <motion.h4 variants={fade}>Social Media #image sharing </motion.h4>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="https://vitamedia.netlify.app/">
          <motion.img variants={photoAnim} src={vita} alt="fwe" />
        </a>
      </Movie>
      <Movie>
        <motion.h4 variants={fade}>Ecommerce App (React & Redux) </motion.h4>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <a href="https://appforecom.netlify.app/">
          <motion.img variants={photoAnim} src={ecom} alt="fwe" />
        </a>
      </Movie>
      <Movie>
        <h4>Stack Overflow Clone "Present Work in progress" </h4>
        <div className="line"></div>
        <a href="https://overflowclone.netlify.app/">
          <img src={stack} alt="stack" />
        </a>
      </Movie>
      <Movie>
        <h4>Voice Reconginition </h4>
        <div className="line"></div>
        <a href="https://voicereconginition.netlify.app/">
          <Hide>
            {" "}
            <img src={rec} alt="rec" />
          </Hide>
        </a>
      </Movie>
      <p></p>
      <h4>&#169; 2023 - All rights reserved to m.r sudhi </h4>
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h4 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 85vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 13%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb; ;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff; ;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0; ;
`;
export default OurWork;
