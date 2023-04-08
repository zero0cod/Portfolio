import React from "react";
//styles
import styled from "styled-components";
import { About } from "./style";
//import pages
import { useScroll } from "./UseScroll";
import { fade } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <FAQ variants={fade} animate={controls} initial="show" ref={element}>
      <h2>
        Education<span>Details</span>
      </h2>
      <div className="question">
        <h4>Bsc Computer Science</h4>
        <div className="answer">
          <p>2018-2022 Batch Kerala University</p>
          <div className="faq-Line"></div>
        </div>
      </div>
      <div className="question">
        <h4>Higher Secondary Education "+2"</h4>
        <div className="answer">
          <p>S.T Xaviers HSS Peyad</p>
          <div className="faq-Line"></div>
        </div>
      </div>
      <div className="question">
        <h4>DCA & DDTP</h4>
        <div className="answer">
          <p>C-Dit</p>
          <div className="faq-Line"></div>
        </div>
      </div>
      <div className="question">
        <h4>Languages Known - Malayalam,English,Hindi,Tamil</h4>
        <div className="answer">
          <div className="faq-Line"></div>
          <p>
            &nbsp; &#169; 2023 - All rights Reserved To the Owner of the site{" "}
          </p>
        </div>
      </div>
    </FAQ>
  );
};

const FAQ = styled(About)`
  display: block;

  span {
    display: block;
  }
  h2 {
    padding-bottom: 0.1rem;
    font-weight: lighter;
  }
  .faq-Line {
    background: #cccccc;
    height: 0.2rem;
    margin: 1rem 0rem;
    width: 100%;
  }
  .question {
    padding: 0rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 1rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
