import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Select from "react-select";
import "../styles/MainPage.css";
import { DragEnd, openModal } from "../Func/MainPageFunction";
import { MdDelete, MdPersonAddAlt1, MdPlaylistAdd } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import InfoModal from "./InfoModal";
import AddCatagorizeModal from "./AddCatagorizeModal";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import AddPersonModal from "./AddPersonModal";

function MainPage() {
  const [tempNama, setTempNama] = useState("");
  const [tempAge, setTempUsia] = useState("");
  const [tempAlamat, setTempAlamat] = useState("");
  const [tempKota, setTempKota] = useState("");
  const [tempTelepon, setTempTelepon] = useState("");
  const [tempNomorKaryawan, setTempNomorKaryawan] = useState("");
  const [infoModal, setInfoModal] = useState(false);
  const [addCatagorize, setAddCatagorize] = useState(false);
  const [Addperson, setAddPerson] = useState(false);
  const [staffData, setStaffData] = useState({
    ["Uncatagorize"]: {
      namakolom: "Uncatagorize",
      isikolom: [
        {
          nama: "Ervan Jovian",
          usia: "21",
          alamat: "Jln.Pontianak III no.32",
          kota: "Bandung",
          telepon: "082125439087",
          nomorKaryawan: "2301873560",
        },
        {
          nama: "Japri Supriyanto",
          usia: "31",
          alamat: "Jln.Kebon teh no.32",
          kota: "Bogor",
          telepon: "088172736464",
          nomorKaryawan: "2301873561",
        },
      ],
    },
    ["Internship"]: {
      namakolom: "Internship",
      isikolom: [],
    },
  });

  const [select, setSelect] = useState([
    { value: "Uncatagorize", label: "Uncatagorize" },
    { value: "Internship", label: "Internship" },
  ]);

  const setTempVariable = (nama, usia, alamat, kota, telepon, nomor) => {
    setTempNama(nama);
    setTempUsia(usia);
    setTempAlamat(alamat);
    setTempKota(kota);
    setTempTelepon(telepon);
    setTempNomorKaryawan(nomor);
  };

  return (
    <div className="mainContainer">
      <Header />
      <div className="Body">
        <DragDropContext
          onDragEnd={(res) => DragEnd(res, staffData, setStaffData)}
        >
          <ScrollMenu className="columnSection">
            {Addperson && (
              <AddPersonModal
                setModal={setAddPerson}
                setKolom={setStaffData}
                kolom={staffData}
                options={select}
              />
            )}
            {infoModal && (
              <InfoModal
                setmodal={setInfoModal}
                settelepon={tempTelepon}
                setnomor={tempNomorKaryawan}
                nama={tempNama}
                age={tempAge}
                setalamat={tempAlamat}
                setkota={tempKota}
              />
            )}
            {addCatagorize && (
              <AddCatagorizeModal
                setmodal={setAddCatagorize}
                kolom={staffData}
                setkolom={setStaffData}
                setSelect={setSelect}
                Select={select}
              />
            )}

            {Object.entries(staffData).map(([kolom, item], index) => (
              <div className="columnContainer">
                <h2>{item.namakolom}</h2>
                <Droppable droppableId={kolom}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      style={{
                        background: snapshot.isDraggingOver ? "#fff" : "#eeee",
                        padding: 4,
                        width: 300,
                        height: 430,
                      }}
                    >
                      {item.isikolom.map((item, index) => (
                        <Draggable
                          key={item.nomorKaryawan}
                          draggableId={item.nomorKaryawan}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.dragHandleProps}
                              {...provided.draggableProps}
                            >
                              <div className="list">
                                <div
                                  onClick={() => {
                                    setTempVariable(
                                      item.nama,
                                      item.usia,
                                      item.alamat,
                                      item.kota,
                                      item.telepon,
                                      item.nomorKaryawan
                                    );
                                    setInfoModal(!infoModal);
                                  }}
                                  className="peoplebar"
                                >
                                  {item.nama}
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
            <div className="Add">
              <button
                onClick={() => openModal(setAddCatagorize)}
                className="addCatagorize"
              >
                <MdPlaylistAdd size={20} />
                <p>Add Catagory</p>
              </button>
              <button
                onClick={() => openModal(setAddPerson)}
                className="addCatagorize"
              >
                <MdPersonAddAlt1 size={20} /> <p>Add person</p>
              </button>
            </div>
          </ScrollMenu>
          <div className="Dump">
            <Droppable droppableId="Dump">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <FaTrash className="dumpIcon" />
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default MainPage;

function Header({}) {
  return (
    <div className="headerSection">
      <h2>Kelola Pegawai : </h2>
    </div>
  );
}
