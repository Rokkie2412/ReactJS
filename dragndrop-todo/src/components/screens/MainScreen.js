import React, { useState } from "react";
import { v4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InputBar from "./InputBar";
import "../styles/MainScreen.css";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

function MainScreen() {
  const [addTask, setAddTask] = useState("");
  const [kolom, setKolom] = useState({
    ["Main-Todo"]: {
      columnName: "Todo",
      items: [
        {
          id: v4(),
          content: "Makan ayam di MCD 🍗",
        },
        {
          id: v4(),
          content: "Main bola sama presiden Putin ⚽",
        },
      ],
    },
    [v4()]: {
      columnName: "In-Progress",
      items: [],
    },
  });

  const handleOnDragnEnd = (res) => {
    if (!res.destination) return;
    if (res.source.droppableId !== res.destination.droppableId) {
      const sourceColumn = kolom[res.source.droppableId];
      console.log("Source Column: ", sourceColumn);
      const destinationColumn = kolom[res.destination.droppableId];
      console.log("Destination Column: ", destinationColumn);
      const sourceitems = [...sourceColumn.items];
      console.log(sourceitems);
      const destItems = [...destinationColumn.items];
      const [removed] = sourceitems.splice(res.source.index, 1);
      destItems.splice(res.destination.index, 0, removed);
      setKolom({
        ...kolom,
        [res.source.droppableId]: {
          ...sourceColumn,
          items: sourceitems,
        },
        [res.destination.droppableId]: {
          ...destinationColumn,
          items: destItems,
        },
      });
    } else {
      const column = kolom[res.source.droppableId];
      const copiedItem = [...column.items];
      console.log(copiedItem);
      const [removed] = copiedItem.splice(res.source.index, 1);
      copiedItem.splice(res.destination.index, 0, removed);
      setKolom({
        ...kolom,
        [res.source.droppableId]: {
          ...column,
          items: copiedItem,
        },
      });
    }
  };

  return (
    <div className="MainContainer">
      <h1>Drag-n-Drop To-do List</h1>
      <InputBar
        addTask={addTask}
        setAddTask={setAddTask}
        item={kolom}
        setitem={setKolom}
      />

      <DragDropContext onDragEnd={handleOnDragnEnd}>
        <div className="TaskBody">
          {Object.entries(kolom).map(([colID, item], index) => (
            <div className="ColumnContainer">
              <h2>{item.columnName}</h2>
              <Droppable droppableId={colID}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      background: snapshot.isDraggingOver
                        ? "aliceblue"
                        : "white",
                      padding: 4,
                      width: 300,
                      height: 550,
                    }}
                  >
                    {item.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            className="list"
                          >
                            <p>{item.content}</p>
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
    </div>
  );
}

export default MainScreen;
