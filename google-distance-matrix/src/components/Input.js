import { Autocomplete } from "@react-google-maps/api";
import React from "react";
import "./input.css";

const Input = ({ placeholder, reference }) => {
  return (
    <div className="inputan">
      <Autocomplete>
        <input placeholder={placeholder} ref={reference} />
      </Autocomplete>
    </div>
  );
};

export default Input;
