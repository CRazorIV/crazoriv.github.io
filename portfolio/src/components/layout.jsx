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
  background: #f0f0f0; /* Optional: Default background */
  color: #333;
`;

export default Layout;
