import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Context } from "./context";
import { Auth } from "./pages/auth";
import { Table } from "./pages/table";
import { PathConstants } from "./routes";
function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [toogle, setToogle] = useState(true);
  return (
    <CssBaseline>
      <Context.Provider value={{ token, setToken, toogle, setToogle }}>
        <BrowserRouter>
          <Routes>
            <Route path={PathConstants.HOME} element={<Auth />} />
            <Route path={PathConstants.TABLE} element={<Table />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </CssBaseline>
  );
}

export default App;
