import * as React from "react";
import Select from "react-select";
import "../styles/modal.css";
import { AddTeamFunction } from "../function";
import { customStylesForSelect } from "../data";

const AddTeam = ({ setModal, select, data, setData, setSelect }) => {
  const [teamName, setTeamName] = React.useState("");
  const [teamId, setTeamId] = React.useState("");
  const [selected, setSelected] = React.useState("");

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
              setSelect((prevData) => [
                ...prevData,
                { value: teamName, label: teamName },
              ]);
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
