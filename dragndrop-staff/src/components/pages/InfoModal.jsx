import React, { useState } from "react";
import "../styles/InfoModal.css";
import { RiAccountCircleFill } from "react-icons/ri";
import { closeModal } from "../Func/MainPageFunction";

function InfoModal({
  setmodal,
  nama,
  age,
  setalamat,
  setkota,
  settelepon,
  setnomor,
}) {
  const [name, setName] = useState(nama);
  const [umur, setUmur] = useState(age);
  const [alamat, setAlamat] = useState(setalamat);
  const [kota, setKota] = useState(setkota);
  const [telepon, setTelepon] = useState(settelepon);
  const [nomor, setNomor] = useState(setnomor);
  console.log(name);
  return (
    <div className="ModalContainer">
      <div className="ModalContent">
        <div className="Header">
          <h2>Staff Info</h2>
          <RiAccountCircleFill className="people" />
        </div>
        <div className="infoSection">
          <table>
            <tbody className="tableBody">
              <tr>
                <th>Nama</th>
                <td>: {name}</td>
              </tr>
              <tr>
                <th>Umur</th>
                <td>: {umur}</td>
              </tr>
              <tr>
                <th>Alamat</th>
                <td>: {alamat}</td>
              </tr>
              <tr>
                <th>Kota</th>
                <td>: {kota}</td>
              </tr>
              <tr>
                <th>Nomor Telepon</th>
                <td>: {telepon}</td>
              </tr>
              <tr>
                <th>ID Karyawan</th>
                <td>: {nomor}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="Footer">
          <button onClick={() => closeModal(setmodal)} className="closeButton">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoModal;
