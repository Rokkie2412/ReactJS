import React from "react";

const TimeAndDistance = ({ dist, time }) => {
  return (
    <div
      style={{
        display: "flex",
        color: "white",
        flexDirection: "column",
        margin: "10px",
      }}
    >
      <p>Distance : {dist}</p>
      <p>Time : {time}</p>
    </div>
  );
};

export default TimeAndDistance;
