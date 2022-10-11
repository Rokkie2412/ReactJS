import React from "react";
import Header from "./components/Header";
import DragDropContext from "./components/DragAndDropContext";
import "./App.css";
const App = () => {
  return (
    <div>
      <Header />
      <DragDropContext />
    </div>
  );
};

export default App;
