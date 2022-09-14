import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DragEnd } from "../../function";
// import { data } from "../../ShiftData";

const Shifthandler = ({ data, setData }) => {
  return (
    <div className="column-section">
      <DragDropContext onDragEnd={(res) => DragEnd(res, data, setData)}>
        {Object.entries(data).map(([column, item]) => (
          <div key={column} className="column-container">
            <h2>{item.shift}</h2>
            <Droppable droppableId={column} type="shift">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    background: snapshot.isDraggingOver ? "#EEE" : "#0F3460",
                    padding: 4,
                    width: 300,
                    minHeight: 520,
                    flex: 1,
                  }}
                >
                  {item.teamInCharge.map((item, index) => (
                    <Draggable
                      draggableId={item.teamId}
                      index={index}
                      key={item.teamId}
                    >
                      {(provided) => (
                        <div className="team">
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                          >
                            <h3>{item.teamName}</h3>
                            <Droppable type="team" droppableId={item.teamName}>
                              {(provided, snapshot) => (
                                <div>
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    style={{
                                      background: snapshot.isDraggingOver
                                        ? "#EEE"
                                        : "#E94560",
                                      width: 300,
                                      height: 200,
                                      flex: 1,
                                      marginBottom: 15,
                                      paddingTop: 5,
                                    }}
                                  >
                                    {item.teamMember.map((people, index) => (
                                      <Draggable
                                        key={people.personId}
                                        draggableId={people.personId}
                                        index={index}
                                      >
                                        {(provided) => (
                                          <div>
                                            <div
                                              ref={provided.innerRef}
                                              {...provided.dragHandleProps}
                                              {...provided.draggableProps}
                                            >
                                              <h4 className="person">
                                                {people.name} :{" "}
                                                {people.position}
                                              </h4>
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
      </DragDropContext>
    </div>
  );
};

export default Shifthandler;
