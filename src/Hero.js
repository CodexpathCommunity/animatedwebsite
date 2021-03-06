import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import MarsOne from "../images/transmarss2.png"
import MarsTwo from "../images/transmarss2.png"
import MarsThree from "../images/transmarss3.png"
import MarsFour from "../images/transmarss4.png"

const Section = styled.section`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2em 0;
    line-height: 1.1;
    font-size: 4rem;
  }
`;

const Button = styled.div`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
`;
const ColumnRight = styled.div``;

const Image = styled.img``

const Hero = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>Welcome to Mars</h1>
          <p>Journey to the unknown</p>
          <Button>Get Started</Button>
        </ColumnLeft>
        <ColumnRight>
        <Image src={MarsOne} alt="transparent photo of Mars"/>
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Hero;
