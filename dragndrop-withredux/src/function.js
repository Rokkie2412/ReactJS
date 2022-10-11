import { setData } from "./store/indexStrore";

export const dragend = (res, data, dispatch) => {
  console.log(res);
  if (!res.destination) {
    return;
  }
  const SourceDrop = res.source.droppableId;
  const DestDrop = res.destination.droppableId;
  const SourceIndex = res.source.index;
  const DestIndex = res.destination.index;

  if (res.type === "team") {
    if (SourceDrop === DestDrop) {
      const findData = data.find((shift) => shift.shiftId === SourceDrop);
      const getWorkingPerson = findData.workingPerson;
      const [spliceTeam] = getWorkingPerson.splice(SourceIndex, 1);
      getWorkingPerson.splice(DestIndex, 0, spliceTeam);
      dispatch(setData(data));
    } else if (SourceDrop !== DestDrop) {
      const findDataSource = data.find((shift) => shift.shiftId === SourceDrop);
      const findDataDest = data.find((shift) => shift.shiftId === DestDrop);
      const [spliceTeam] = findDataSource.workingPerson.splice(SourceIndex, 1);
      findDataDest.workingPerson.splice(DestIndex, 0, spliceTeam);
      dispatch(setData(data));
    }
  } else if (res.type !== "team") {
    if (SourceDrop === DestDrop) {
      const findData = data
        .flatMap((dt) => dt.workingPerson)
        .find((person) => person.teamId === SourceDrop);
      console.log(findData);
      const [splicePerson] = findData.teamMember.splice(SourceIndex, 1);
      findData.teamMember.splice(DestIndex, 0, splicePerson);
      dispatch(setData(data));
    } else if (SourceDrop !== DestDrop) {
      const findDataSource = data
        .flatMap((dt) => dt.workingPerson)
        .find((person) => person.teamId === SourceDrop);
      const findDataDest = data
        .flatMap((dt) => dt.workingPerson)
        .find((person) => person.teamId === DestDrop);
      const [splicePerson] = findDataSource.teamMember.splice(SourceIndex, 1);
      findDataDest.teamMember.splice(DestIndex, 0, splicePerson);
      dispatch(setData(data));
    }
  }
};
