import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import DropableTeam from "../containers/DropableTeam";
import { dragend } from "../function";

const DragAndDropContext = () => {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.data);
  return (
    <div>
      <DragDropContext onDragEnd={(res) => dragend(res, getData, dispatch)}>
        <DropableTeam />
      </DragDropContext>
    </div>
  );
};

export default DragAndDropContext;
