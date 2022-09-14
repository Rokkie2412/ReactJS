import React, { useState } from "react";
import "../styles/style.css";
import { itemDataShift } from "../data";
import DragDropHandler from "../container/DragDropHandler";
import AddShift from "../container/AddShift";
import AddTeam from "../container/AddTeam";

const Main = () => {
  const [item, setItem] = useState(itemDataShift);
  const [addShiftModal, setAddShiftModal] = useState(false);
  const [addTeamModal, setAddTeamModal] = useState(false);
  const [select, setSelecet] = useState([
    { value: "Morning Shift", label: "Morning Shift" },
    { value: "Afternoon Shift", label: "Afternoon Shift" },
  ]);
  return (
    <div className="main-container">
      <header>
        <h1>Cafe's Working Shift</h1>
        <div className="button-section">
          <button>Add Person</button>
          <button onClick={() => setAddTeamModal(!addTeamModal)}>
            Add Team
          </button>
          <button onClick={() => setAddShiftModal(!addShiftModal)}>
            Add Shift
          </button>
        </div>
      </header>
      <DragDropHandler data={item} setData={setItem} />
      {addShiftModal && (
        <AddShift
          setModal={setAddShiftModal}
          data={item}
          setdata={setItem}
          setSelect={setSelecet}
        />
      )}
      {addTeamModal && (
        <AddTeam
          setModal={setAddTeamModal}
          select={select}
          data={item}
          setData={setItem}
        />
      )}
    </div>
  );
};

export default Main;