import React from "react";

const Footer = () => {
  return (
    <div className="footer-Container">
      <p>ReactJS Nested Library</p>
      <p>Credit To :</p>
      <div className="credit-section">
        <div className="credit-left">
          <div className="credit">
            <a href="https://reactjs.org/">ReactJS</a>
            <a href="https://react-select.com/">React Select</a>
          </div>
        </div>
        <div className="credit-right">
          <div className="credit">
            <a href="https://github.com/atlassian/react-beautiful-dnd">
              React Beautiful Dnd
            </a>
            <a href="https://www.npmjs.com/package/react-horizontal-scrolling-menu">
              React Horizontal Scroll Menu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
