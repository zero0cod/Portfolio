import React from "react";
import home1 from "../img/home1.png";
//styled
// import styled from 'styled-components';
import { About, Description, Image, Hide } from "./style";
//frame emotion
import { motion, AnimatePresence } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./wave";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h1 variants={titleAnim}>We work to make</motion.h1>
          </Hide>
          <Hide>
            <motion.h1 variants={titleAnim}>
              your <span>dreams</span>come
            </motion.h1>
          </Hide>
          <Hide>
            <motion.h1 variants={titleAnim}>true.</motion.h1>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact for any web or programing related queries that you need.The
          collection of skills and experince is waiting for you */ Open to Work
          /*
        </motion.p>
        <motion.button variants={fade}>Message</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="home1" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
