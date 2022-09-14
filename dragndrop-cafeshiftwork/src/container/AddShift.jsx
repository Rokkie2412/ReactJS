import * as React from "react";
import "../styles/modal.css";
import { AddShiftFunction } from "../function";

const AddShift = ({ setModal, data, setdata, setSelect }) => {
  const [newShift, setNewShift] = React.useState("");
  return (
    <div className="overlay">
      <div className="content">
        <h2>Add Shift</h2>
        <p>Input Shift Name : </p>
        <input
          value={newShift}
          onChange={(e) => setNewShift(e.target.value)}
          placeholder="Write here"
        />
        <div className="button-modal">
          <button onClick={() => setModal(false)}>Cancel</button>
          <button
            onClick={() => {
              AddShiftFunction(data, setdata, newShift);
              setNewShift("");
              setModal(false);
              setSelect((prevData) => [
                ...prevData,
                { value: newShift, label: newShift },
              ]);
            }}
          >
            Add shift
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddShift;
