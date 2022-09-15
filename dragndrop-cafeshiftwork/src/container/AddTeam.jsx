//@flow

import * as React from "react";
import Select from "react-select";
import "../styles/modal.css";
import { AddTeamFunction } from "../function";
import { customStylesForSelect } from "../data";
import type { AddTeamType } from "../../All.type";

const AddTeam = ({
  setModal,
  select,
  data,
  setData,
  setSelect,
}: AddTeamType): React.Node => {
  const [teamName, setTeamName] = React.useState("");
  const [teamId, setTeamId] = React.useState("");
  const [selected, setSelected] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const errorHandler = () => {
    if (teamName.length <= 3 && teamId.length === 0 && selected.length === 0) {
      setErrorMessage("make sure all data has been filled");
    } else {
      AddTeamFunction(selected, teamName, teamId, data, setData);
      setSelect((prevData) => [
        ...prevData,
        { value: teamName, label: teamName },
      ]);
      setTeamId("");
      setErrorMessage("");
      setSelected("");
      setTeamName("");
      setModal(false);
    }
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
        <p className="ErrorMessage">{errorMessage}</p>
        <div className="button-modal">
          <button onClick={() => setModal(false)}>Cancel</button>
          <button onClick={errorHandler}>Add Team</button>
        </div>
      </div>
    </div>
  );
};

export default AddTeam;
