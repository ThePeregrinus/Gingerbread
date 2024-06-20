import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TokenContext } from "./context";
import { Auth } from "./pages/auth";
import { PathConstants } from "./routes";

function App() {
  const [token, setToken] = useState('');
  return (
    <CssBaseline>
      <TokenContext.Provider value={{token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path={PathConstants.HOME} element={<Auth />} />
        </Routes>
      </BrowserRouter>
      </TokenContext.Provider>
    </CssBaseline>
  );
}

export default App;
