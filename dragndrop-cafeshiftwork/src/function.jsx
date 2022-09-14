export const Dragend = (data, setData, res) => {
  console.log(res);
  if (!res.destination) {
    return;
  }
  const sourceDropId = res.source.droppableId;
  const destDropId = res.destination.droppableId;
  if (res.type === "team") {
    if (sourceDropId === destDropId) {
      const getData = data[sourceDropId].workingPerson;
      const [removed] = getData.splice(res.source.index, 1);
      getData.splice(res.destination.index, 0, removed);
      setData(data);
    } else if (sourceDropId !== destDropId) {
      const getData = data[sourceDropId].workingPerson;
      const getdestData = data[destDropId].workingPerson;
      const [removed] = getData.splice(res.source.index, 1);
      getdestData.splice(res.destination.index, 0, removed);
      setData(data);
    }
    console.log(data);
  } else if (res.type !== "team") {
    if (sourceDropId === destDropId) {
      const findData = data
        .flatMap((dt) => dt.workingPerson)
        .find((c) => c.teamId === sourceDropId);
      const getTeamMember = findData.teamMember;
      const [removed] = getTeamMember.splice(res.source.index, 1);
      getTeamMember.splice(res.destination.index, 0, removed);
      setData(data);
    } else if (sourceDropId !== destDropId) {
      const findDataSource = data
        .flatMap((dt) => dt.workingPerson)
        .find((c) => c.teamId === sourceDropId);
      const findDataDest = data
        .flatMap((dt) => dt.workingPerson)
        .find((c) => c.teamId === destDropId);
      const getTeamMemberSource = findDataSource.teamMember;
      const getTeamMemberDestination = findDataDest.teamMember;
      const [removedSource] = getTeamMemberSource.splice(res.source.index, 1);
      getTeamMemberDestination.splice(res.destination.index, 0, removedSource);
      setData(data);
    }
  }
};

export const AddShiftFunction = (data, setData, shiftname) => {
  const id = data.length;
  const getStringId = id.toString();
  setData((prevData) => [
    ...prevData,
    { shiftId: getStringId, shiftName: shiftname, workingPerson: [] },
  ]);
};

export const AddTeamFunction = (select, teamname, id, data, setData) => {
  const getSelectValue = select.value;
  const findDataFromSelect = data.find((c) => c.shiftName === getSelectValue);
  const newObjectToPush = {
    Teamname: teamname,
    teamId: id,
    teamMember: [],
  };
};
