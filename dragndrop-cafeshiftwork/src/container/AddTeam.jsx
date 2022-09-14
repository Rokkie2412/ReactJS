import * as React from "react";
import Select from "react-select";
import "../styles/modal.css";
import { AddTeamFunction } from "../function";

const AddTeam = ({ setModal, select, data, setData }) => {
  const [teamName, setTeamName] = React.useState("");
  const [teamId, setTeamId] = React.useState("");
  const [selected, setSelected] = React.useState("");
  const customStylesForSelect = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "red" : "#333",
      padding: 10,
    }),
    control: (base, state) => ({
      ...base,
      border: "2px solid #333",
      boxShadow: state.isFocused ? 0 : 0,
      "&:hover": {
        border: state.isFocused ? "2px solid #222" : "2px solid #333",
      },
    }),
  };
  return (
    <div className="overlay">
      <div className="content">
        <h2>Add Team</h2>
        <p>Team name :</p>
        <input
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Write here"
        />
        <p>Team Id</p>
        <input
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
          placeholder="Write here"
        />
        <p>Add team to :</p>
        <Select
          styles={customStylesForSelect}
          className="select"
          options={select}
          value={selected}
          onChange={(e) => setSelected(e)}
        />
        <div className="button-modal">
          <button onClick={() => setModal(false)}>Cancel</button>
          <button
            onClick={() => {
              AddTeamFunction(selected, teamName, teamId, data, setData);
              setTeamId("");
              setSelected("");
              setTeamName("");
              setModal(false);
            }}
          >
            Add Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTeam;
