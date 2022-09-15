import * as React from "react";
import "../styles/modal.css";
import { AddShiftFunction } from "../function";

const AddShift = ({ setModal, data, setdata, setSelect }) => {
  const [newShift, setNewShift] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const errorHandler = () => {
    if (newShift.length < 3) {
      setErrorMessage("make sure all data has been filled");
    } else {
      AddShiftFunction(data, setdata, newShift);
      setNewShift("");
      setErrorMessage("");
      setModal(false);
      setSelect((prevData) => [
        ...prevData,
        { value: newShift, label: newShift },
      ]);
    }
  };

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
        <p className="ErrorMessage">{errorMessage}</p>
        <div className="button-modal">
          <button onClick={() => setModal(false)}>Cancel</button>
          <button onClick={errorHandler}>Add shift</button>
        </div>
      </div>
    </div>
  );
};

export default AddShift;
