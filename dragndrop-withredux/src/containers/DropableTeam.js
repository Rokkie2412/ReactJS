import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { v4 } from "uuid";
import DropablePerson from "./DropablePerson";
import "./DroppableTeam.style.css";

const DropableTeam = () => {
  const shiftData = useSelector((state) => state.data);
  return (
    <div className="DroopableTeam-container">
      {shiftData.map((item, index) => (
        <div key={v4()} className="first-dropable">
          <h2>{item.shiftName}</h2>
          <Droppable droppableId={item.shiftId} type="team">
            {(provided, snapshot) => (
              <div
                className="drop"
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  background: snapshot.isDraggingOver ? "#EEE" : "#d9d9d9",
                  padding: 4,
                  width: 270,
                  minHeight: 200,
                  flex: 1,
                }}
              >
                {item.workingPerson.map((team, index) => (
                  <Draggable
                    draggableId={team.squadId}
                    key={team.squadId}
                    index={index}
                  >
                    {(provided) => (
                      <div>
                        <div
                          className="person-wrapper"
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                        >
                          <h3>{team.teamName}</h3>
                          <div className="droopable-person" key={v4()}>
                            <DropablePerson person={team} index={index} />
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      ))}
    </div>
  );
};

export default DropableTeam;
