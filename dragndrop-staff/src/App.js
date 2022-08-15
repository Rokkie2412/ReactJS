import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import "./components/styles/App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
