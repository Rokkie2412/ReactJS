import * as React from "react";
import Header from "./container/Header";
import "../styles/App.css";
import { data } from "../ShiftData";
import Shifthandler from "./container/Shifthandler";

const MainPages = (): React.Node => {
  const [shift, setShift] = React.useState(data);
  return (
    <div className="mainContainer">
      <Header />
      {console.log(shift)}
      <Shifthandler data={shift} setData={setShift} />
    </div>
  );
};

export default MainPages;
