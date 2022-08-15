import React from "react";
import "../styles/MainScreen.css";
import { v4 } from "uuid";
import { useState } from "react";
import Modal from "../../Modal/AddColumnModal";

function InputBar({ addTask, setAddTask, item, setitem }) {
  const [openModal, setOpenModal] = useState(false);
  const [addColumnName, setAddColumnName] = useState("");
  return (
    <div className="AddSection">
      <input value={addTask} onChange={(e) => setAddTask(e.target.value)} />
      <button
        onClick={() => {
          if (addTask.length < 3) {
            return;
          } else {
            setitem((prev) => ({
              ...prev, // current kolom
              "Main-Todo": {
                ...prev["Main-Todo"], // current kolom["Main-Todo"]
                items: prev["Main-Todo"].items.concat({
                  id: v4(),
                  content: addTask,
                }), // new items
              },
            }));
            setAddTask("");
          }
        }}
        className="AddButton"
      >
        Add Task
      </button>
      <button onClick={() => setOpenModal(!openModal)} className="AddButton">
        Add Column
      </button>
      {openModal && (
        <Modal
          setModal={setOpenModal}
          setname={setAddColumnName}
          name={addColumnName}
          item={item}
          setitem={setitem}
        />
      )}
    </div>
  );
}

export default InputBar;
