import * as React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Dragend } from "../function";
import type { dnd } from "../../All.type";

const DragDropHandler = ({ data, setData }: dnd): React.Node => {
  return (
    <DragDropContext onDragEnd={(res) => Dragend(data, setData, res)}>
      <div className="container-dragndrop">
        {data.map((item, index) => (
          <div key={item.shiftId} className="container-droppable">
            <h2>{item.shiftName}</h2>
            <Droppable droppableId={item.shiftId} type="team">
              {(provided: any, snapshot: any) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    background: snapshot.isDraggingOver ? "#EEE" : "#fff",
                    padding: 4,
                    width: 300,
                    minHeight: 200,
                    flex: 1,
                  }}
                >
                  {item.workingPerson.map((team, index) => (
                    <Draggable
                      draggableId={team.teamId}
                      key={team.teamId}
                      index={index}
                    >
                      {(provided) => (
                        <div>
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            className="titleteam"
                          >
                            <h3>{team.teamName}</h3>
                            <Droppable
                              droppableId={team.teamId}
                              key={team.teamId}
                            >
                              {(provided: any, snapshot: any) => (
                                <div>
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                  >
                                    {team.teamMember.map((member, index) => (
                                      <Draggable
                                        draggableId={member.personId}
                                        index={index}
                                        key={member.personId}
                                      >
                                        {(provided: any) => (
                                          <div className="member">
                                            <div
                                              ref={provided.innerRef}
                                              {...provided.dragHandleProps}
                                              {...provided.draggableProps}
                                              className="member-container"
                                            >
                                              <h4>{member.name}</h4>
                                            </div>
                                            {provided.placeholder}
                                          </div>
                                        )}
                                      </Draggable>
                                    ))}
                                  </div>

                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
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
          </div>
        ))}
      </div>
    </DragDropContext>
  );
};

export default DragDropHandler;
