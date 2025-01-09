import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Section>
      <h1>Welkom op mijn portfolio!</h1>
      <p>Hier vertel ik iets kort over mezelf.</p>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #f0f0f0;
  color: #333;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
  }
`;

export default Home;
