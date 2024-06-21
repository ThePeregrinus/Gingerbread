import { Dispatch, SetStateAction } from "react";

export interface IToken {
    token: string;
    setToken: Dispatch<SetStateAction<string>>;
  }
  
