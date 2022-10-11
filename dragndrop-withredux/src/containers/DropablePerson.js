import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import "./DropablePerson.style.css";

const DropablePerson = ({ person, index }) => {
  return (
    <Droppable droppableId={person.teamId} type="person">
      {(provided, snapshot) => (
        <div
          className="droppable2"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {person.teamMember.map((member, index) => (
            <Draggable
              draggableId={member.personId}
              index={index}
              key={member.personId}
            >
              {(provided) => (
                <div>
                  <div
                    className="person"
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    <h4>{member.name}</h4>
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default DropablePerson;
