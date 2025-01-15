// Layout.js
import React from "react";
import PropTypes from 'prop-types';
import './Layout.css';

const Layout = ({ children }) => {
  return <div className="layout-wrapper">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
