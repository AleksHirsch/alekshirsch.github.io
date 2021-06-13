import React from 'react';
import styled from 'styled-components';

const Hero = styled.div<{ fontSize?: string }>`
  display: grid;
  place-items: center;
  background-color: #353535;
  color: #f06456;
  height: 100vh;
  font-size: ${(props) => props.fontSize || '35px'};
`;

function Landing() {
  return <Hero>Hello</Hero>;
}

export default Landing;
