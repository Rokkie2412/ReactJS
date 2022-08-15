import React, { useState } from "react";
import { closeModal } from "../Func/MainPageFunction";
import "../styles/AddCatagorize.css";
import { v4 } from "uuid";

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
              setkolom((prev) => ({
                ...prev,
                [name]: {
                  namakolom: name,
                  isikolom: [],
                },
              }));
              setSelect((prev) => [...prev, { value: name, label: name }]);
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
