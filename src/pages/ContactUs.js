import React from "react";
//page animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
//page animation
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
      className="AboutUs"
    >
      <Title>
        {" "}
        <Hide>
          {" "}
          <motion.h1 variants={titleAnim}>Contact Details</motion.h1>{" "}
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle>
              <h2>
                Address - BLora 16 ,sudhi bhavan,malayinkeezhu p.o,tvm, 695571
              </h2>
            </Circle>
          </Social>
        </Hide>

        <Hide>
          {" "}
          <Social variants={titleAnim}>
            <Circle>
              <h2>Phone - +91 6282143512</h2>
            </Circle>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle>
              <h2>
                LinkedIn -{" "}
                <a href="https://www.linkedin.com/in/sudhi-s-web-developer/">
                  {" "}
                  https://www.linkedin.com/in/sudhi-s-web-developer/
                </a>
              </h2>
            </Circle>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle>
              <h2>
                Instagram -{" "}
                <a href="https://www.instagram.com/___the_saint__/">
                  {" "}
                  https://www.instagram.com/___the_saint__/{" "}
                </a>
              </h2>
            </Circle>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle>
              <h2>
                Git -
                <a href="https://github.com/zero0cod/">
                  https://github.com/zero0cod/
                </a>
              </h2>
            </Circle>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  * {
  }
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: rem;
  color: black;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  margin: 3px;
  background: #353535;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  min-height: 10vh;
  h2 {
    margin: 0rem 2rem 1rem;
    padding-left: 2rem;
    width: 50rem;
    border: 2px solid none;
    font-size: 20px;
  }
  border: 2px solid;
`;

export default Contact;
