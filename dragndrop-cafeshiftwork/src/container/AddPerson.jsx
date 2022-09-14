import * as React from "react";
import "../styles/modal.css";
import Select from "react-select";
import { customStylesForSelect } from "../data";
import { AddPersonFunction } from "../function";

const AddPerson = ({ setModal, selectData, data, setData }) => {
  const [name, setName] = React.useState("");
  const [id, setId] = React.useState("");
  const [select, setSelect] = React.useState("");
  return (
    <div className="overlay">
      <div className="content">
        <h2>Add Person Member</h2>
        <p>Person name :</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Person Id :</p>
        <input value={id} onChange={(e) => setId(e.target.value)} />
        <p>Add person to :</p>
        <Select
          className="select"
          styles={customStylesForSelect}
          options={selectData}
          value={select}
          onChange={(selected) => setSelect(selected)}
        />
        <div className="button-modal">
          <button onClick={() => setModal(false)}>Cancel</button>
          <button
            onClick={() => {
              AddPersonFunction(select, name, id, data, setData);
              setName("");
              setId("");
              setSelect("");
              setModal(false);
            }}
          >
            Add Person
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPerson;
