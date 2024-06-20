import { createContext } from "react";

import { IToken } from "../types";

export const TokenContext = createContext<IToken>({token:'', setToken: ()=>{}})