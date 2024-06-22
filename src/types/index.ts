import { Dispatch, SetStateAction } from "react";

export interface IContext {
    token: string;
    setToken: Dispatch<SetStateAction<string>>;
    
    toogle: boolean,
    setToogle :Dispatch<SetStateAction<boolean>>
  }

 export interface IModal{
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
  }
  
  