// Layout.js
import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #1A1A2E; /* Optional: Default background */
  color: #E0E0E0;
`;

export default Layout;
