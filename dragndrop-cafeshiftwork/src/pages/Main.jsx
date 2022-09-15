import React, { useState } from "react";
import "../styles/style.css";
import { itemDataShift } from "../data";
import DragDropHandler from "../container/DragDropHandler";
import AddShift from "../container/AddShift";
import AddTeam from "../container/AddTeam";
import AddPerson from "../container/AddPerson";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Footer from "../container/Footer";

const Main = () => {
  const [item, setItem] = useState(itemDataShift);
  const [addShiftModal, setAddShiftModal] = useState(false);
  const [addTeamModal, setAddTeamModal] = useState(false);
  const [addPersonModal, setAddPersonModal] = useState(false);
  const [select, setSelecet] = useState([
    { value: "Morning Shift", label: "Morning Shift" },
    { value: "Afternoon Shift", label: "Afternoon Shift" },
  ]);
  const [selectTeam, setSelectTeam] = useState([
    { value: "Team-A", label: "Team-A" },
    { value: "Team-B", label: "Team-B" },
    { value: "Team-C", label: "Team-C" },
    { value: "Team-D", label: "Team-D" },
  ]);
  return (
    <div className="main-container">
      <header>
        <h1>Cafe's Working Shift</h1>
        <div className="button-section">
          <button onClick={() => setAddPersonModal(!addPersonModal)}>
            Add Person
          </button>
          <button onClick={() => setAddTeamModal(!addTeamModal)}>
            Add Team
          </button>
          <button onClick={() => setAddShiftModal(!addShiftModal)}>
            Add Shift
          </button>
        </div>
      </header>
      <ScrollMenu>
        <DragDropHandler data={item} setData={setItem} />
      </ScrollMenu>
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
          setSelect={setSelectTeam}
        />
      )}
      {addPersonModal && (
        <AddPerson
          setModal={setAddPersonModal}
          selectData={selectTeam}
          data={item}
          setData={setItem}
        />
      )}
      <Footer />
    </div>
  );
};

export default Main;
