import React, { useState } from "react";
import {
  closeModal,
  addCatagorize,
  AddItemtoSelect,
} from "../Func/MainPageFunction";
import "../styles/AddCatagorize.css";

function AddCatagorizeModal({ setmodal, setkolom, kolom, Select, setSelect }) {
  const [name, setname] = useState("");
  return (
    <div className="Overlay">
      <div className="Content">
        <h1>Add Catagory</h1>
        <div className="InputSection">
          <p>Catagory's name : </p>
          <input
            placeholder="Input here"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="butt">
          <button onClick={() => closeModal(setmodal)} className="cancel">
            Cancel
          </button>
          <button
            onClick={(e) => {
              addCatagorize(setkolom, name);
              AddItemtoSelect(setSelect, name);
              console.log(Select);
              setmodal(false);
              setname("");
            }}
            className="add"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCatagorizeModal;
