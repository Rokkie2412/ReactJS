export function DragEnd(res, data, setData) {
  if (!res.destination) return;
  console.log(res);
  if (res.type !== "team") {
    if (res.source.droppableId === res.destination.droppableId) {
      const column = data[res.source.droppableId];
      const copiedItem = [...column.teamInCharge];
      const [removed] = copiedItem.splice(res.source.index, 1);
      copiedItem.splice(res.destination.index, 0, removed);
      setData({
        ...data,
        [res.source.droppableId]: {
          ...column,
          teamInCharge: copiedItem,
        },
      });
    } else if (res.source.droppableId !== res.destination.droppableId) {
      const getDataSource = data[res.source.droppableId];
      const getDataDestination = data[res.destination.droppableId];
      const sourceItem = [...getDataSource.teamInCharge];
      const destinationItem = [...getDataDestination.teamInCharge];
      const [slicedItem] = sourceItem.splice(res.source.index, 1);
      console.log(slicedItem.teamId);
      destinationItem.splice(res.destination.index, 0, slicedItem);
      setData({
        ...data,
        [res.source.droppableId]: {
          ...getDataSource,
          teamInCharge: sourceItem,
        },
        [res.destination.droppableId]: {
          ...getDataDestination,
          teamInCharge: destinationItem,
        },
      });
    }
  } else if (res.type === "team") {
    if (res.source.droppableId === res.destination.droppableId) {
      const childData = data["MorningShift"];
      const personItem = [...childData.teamInCharge];
    }
  }
}
