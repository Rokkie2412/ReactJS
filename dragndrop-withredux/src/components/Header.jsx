import React from "react";
import "./Header.style.css";

const Header = () => {
  return (
    <div className="header-component">
      <h1>Cafe ShiftWork</h1>
      <div className="button-header">
        <button>Add Person</button>
        <button>Add Team</button>
        <button>Add Shift</button>
      </div>
    </div>
  );
};

export default Header;
