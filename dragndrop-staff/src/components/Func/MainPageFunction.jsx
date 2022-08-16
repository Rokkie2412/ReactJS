import { setSelectionRange } from "@testing-library/user-event/dist/utils";

export const DragEnd = (res, kolom, setKolom) => {
  if (!res.destination) return;
  console.log(res);
  if (
    res.source.droppableId !== res.destination.droppableId &&
    res.destination.droppableId !== "Dump"
  ) {
    const sourceColumn = kolom[res.source.droppableId];
    const destinationColumn = kolom[res.destination.droppableId];
    const sourceitems = [...sourceColumn.isikolom];
    const destItems = [...destinationColumn.isikolom];
    const [removed] = sourceitems.splice(res.source.index, 1);
    destItems.splice(res.destination.index, 0, removed);
    setKolom({
      ...kolom,
      [res.source.droppableId]: {
        ...sourceColumn,
        isikolom: sourceitems,
      },
      [res.destination.droppableId]: {
        ...destinationColumn,
        isikolom: destItems,
      },
    });
  } else if (res.source.droppableId === res.destination.droppableId) {
    const column = kolom[res.source.droppableId];
    const copiedItem = [...column.isikolom];
    console.log(copiedItem);
    const [removed] = copiedItem.splice(res.source.index, 1);
    copiedItem.splice(res.destination.index, 0, removed);
    setKolom({
      ...kolom,
      [res.source.droppableId]: {
        ...column,
        isikolom: copiedItem,
      },
    });
  } else if (res.destination.droppableId === "Dump") {
    const Dumpcolumn = kolom[res.source.droppableId];
    const TakeItem = [...Dumpcolumn.isikolom];
    TakeItem.splice(res.source.index, 1);
    console.log("DUMP", TakeItem);
    setKolom({
      ...kolom,
      [res.source.droppableId]: {
        ...Dumpcolumn,
        isikolom: TakeItem,
      },
    });
  }
};

export const closeModal = (setModal) => {
  setModal(false);
};

export const openModal = (setModal) => {
  setModal(true);
};

export const addNewPersonIte = (
  setKolom,
  data,
  nama,
  usia,
  alamat,
  kota,
  telp,
  karyawan
) => {
  setKolom((prev) => ({
    ...prev,
    [data]: {
      ...prev[data],
      isikolom: prev[data].isikolom.concat({
        nama: nama,
        usia: usia,
        alamat: alamat,
        kota: kota,
        telepon: telp,
        nomorKaryawan: karyawan,
      }),
    },
  }));
};

export const addCatagorize = (setKolom, name) => {
  setKolom((prev) => ({
    ...prev,
    [name]: {
      namakolom: name,
      isikolom: [],
    },
  }));
};

export const AddItemtoSelect = (setSelect, name) => {
  setSelect((prev) => [...prev, { value: name, label: name }]);
};
