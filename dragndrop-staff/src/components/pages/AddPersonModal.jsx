import React, { useState } from "react";
import Select from "react-select";
import "../styles/AddPersonModal.css";
import { closeModal } from "../Func/MainPageFunction";

function AddPersonModal({ setModal, options, setKolom, kolom }) {
  const [nama, setNama] = useState("");
  const [usia, setusia] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kota, setKota] = useState("");
  const [telp, setTelp] = useState("");
  const [karyawan, setKaryawan] = useState("");
  const [selectValue, setSelectValue] = useState([]);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 20,
      color: state.isSelected ? "red" : "black",
      outline: "none",
    }),
  };

  return (
    <div className="Overlay">
      <div className="Content">
        <h1>Add Person</h1>
        <div className="BodyInput">
          <p>Nama & usia :</p>
          <div className="namadanumur">
            <input
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              id="nama"
              placeholder="Input Nama"
            />
            <input
              value={usia}
              onChange={(e) => setusia(e.target.value)}
              id="usia"
              type="number"
              min="18"
              placeholder="Input Usia"
            />
          </div>
          <p>Posisi : </p>

          <Select
            value={selectValue}
            onChange={(selected) => {
              setSelectValue(selected);
            }}
            styles={customStyles}
            className="selection"
            options={options}
          />

          <p>Alamat :</p>
          <div className="alamat">
            <input
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              id="alamat1"
              placeholder="Alamat"
            />
            <input
              value={kota}
              onChange={(e) => setKota(e.target.value)}
              id="alamat2"
              placeholder="Kota Tinggal"
            />
          </div>

          <p>No. telepon :</p>
          <input
            value={telp}
            onChange={(e) => setTelp(e.target.value)}
            type="number"
            placeholder="Input Telepon"
          />
          <p>No. Karyawan :</p>
          <input
            value={karyawan}
            onChange={(e) => setKaryawan(e.target.value)}
            placeholder="Input Name"
          />
          <div className="buttonSection">
            <button onClick={() => closeModal(setModal)} id="cancel">
              Cancel
            </button>
            <button
              onClick={() => {
                const getValue = selectValue.value;
                console.log(getValue);
                setKolom((prev) => ({
                  ...prev, // current kolom
                  getValue: {
                    ...prev[getValue], // current kolom["Main-Todo"]
                    isikolom: prev[getValue].isikolom.concat({
                      nama: nama,
                      usia: usia,
                      alamat: alamat,
                      kota: kota,
                      telepon: telp,
                      nomorKaryawan: karyawan,
                    }), // new items
                  },
                }));
                closeModal(setModal);
              }}
              id="added"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPersonModal;
