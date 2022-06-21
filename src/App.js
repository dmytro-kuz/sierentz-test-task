import "./App.css";
import TablePage from "./components/tablePage/TablePage";
import PopupPage from "./components/popup/PopupPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='*' element={<TablePage />}></Route>
      <Route path='/popup' element={<PopupPage />}></Route>
    </Routes>
  );
}

export default App;
