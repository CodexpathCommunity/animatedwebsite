import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Hero = () => {
  return (
    <Section>
      <Container>
        
      </Container>
    </Section>
  );
};

export default Hero;
