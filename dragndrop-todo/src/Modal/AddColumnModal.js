import React from "react";
import { v4 } from "uuid";
import { RiAddCircleLine } from "react-icons/ri";
import "../components/styles/Modal.css";
function AddColumnModal({ setModal, name, setname, item, setitem }) {
  return (
    <div className="ModalContainer">
      <div className="ModalContent">
        <div className="IconSection">
          <RiAddCircleLine className="IconWarning" />
        </div>
        <div className="Body">
          <p>Column Name </p>
          <input
            placeholder="Enter Column Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="Footer">
          <button
            className="ButtonCancel"
            onClick={() => {
              setModal(false);
              setname("");
            }}
          >
            Cancel
          </button>
          <button
            onClick={(e) => {
              setitem((prev) => ({
                ...prev,
                [v4()]: {
                  columnName: name,
                  items: [],
                },
              }));
              setModal(false);
              setname("");
            }}
            className="ButtonYes"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddColumnModal;
