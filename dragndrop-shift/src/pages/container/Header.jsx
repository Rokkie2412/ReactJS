import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <h1>Shifting Schedule</h1>
      <div className="shift-button">
        <button>Add Shift</button>
        <button>Add Team</button>
      </div>
    </div>
  );
};

export default Header;
