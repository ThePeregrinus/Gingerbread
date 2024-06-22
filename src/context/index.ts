import { createContext } from "react";

import { IContext } from "../types";

export const Context = createContext<IContext>({
  token: localStorage.getItem("token") || "",
  setToken: () => {},
  toogle: true,
  setToogle: () => {},
});
