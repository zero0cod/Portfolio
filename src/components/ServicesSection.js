import React from "react";
//icons
import Html5 from "../img/Html5.png";
import js from "../img/js.png";
import css3 from "../img/css3.png";
import boot from "../img/boot.png";
import react from "../img/react.png";
import node from "../img/node.png";
import php from "../img/php.png";
import my from "../img/my.png";
import git from "../img/git.png";

import home2 from "../img/home2.png";
//styled components
import styled from "styled-components";
import { About, Description, Image } from "./style";

//animation
import { scrollReveal } from "../animation";
import { useScroll } from "./UseScroll";
const ServiceSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Expertized <span>languages</span> and skills
        </h2>
        <Cards>
          {/* card 1 */}
          <Card>
            <div className="icon">
              <img src={Html5} alt="Html5" />
              <h3>HTML&nbsp;5</h3>
              <p></p>
            </div>
          </Card>
          {/* card 2 */}

          <Card>
            <div className="icon">
              <img src={js} alt="js" />
              <h3>JavaScript</h3>
              <p></p>
            </div>
          </Card>

          {/* card 3 */}

          <Card>
            <div className="icon">
              <img src={css3} alt="css3" />
              <h3>CSS&nbsp;3</h3>
              <p></p>
            </div>
          </Card>
          {/* card 4 */}

          <Card>
            <div className="icon">
              <img src={boot} alt="boot" />
              <h3>Bootstrap</h3>
              <p></p>
            </div>
          </Card>
          {/* card 5 */}

          <Card>
            <div className="icon">
              <img src={react} alt="react" />
              <h3>Reactjs With&nbsp;Redux</h3>
              <p></p>
            </div>
          </Card>
          {/* card 6 */}

          <Card>
            <div className="icon">
              <img src={node} alt="node" />
              <h3>Node&nbsp;JS</h3>
              <p></p>
            </div>
          </Card>
          {/* card 7 */}

          <Card>
            <div className="icon">
              <img src={php} alt="php" />
              <h3>Php&nbsp;V7 </h3>
              <p></p>
            </div>
          </Card>
          {/* card 8 */}

          <Card>
            <div className="icon">
              <img src={my} alt="my" />
              <h3>MySQL</h3>
              <p></p>
            </div>
          </Card>
          {/* card 9 */}

          <Card>
            <div className="icon">
              <img src={git} alt="git" />
              <h3>Git</h3>
              <p></p>
            </div>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="camera" />
      </Image>
    </Services>
  );
};
const Services = styled(About)`
  h2 {
    padding-bottom: 4rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 6rem;

  .icon {
    padding-right: 2rem;
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 10px;
    }
  }
`;

export default ServiceSection;
