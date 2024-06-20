import { BrowserRouter, Route, Routes } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Auth } from "./pages/auth";
import { PathConstants } from "./routes";
import "./App.css";

function App() {
  return (
    <CssBaseline>
      <BrowserRouter>
        <Routes>
          <Route path={PathConstants.HOME} element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </CssBaseline>
  );
}

export default App;
