import { Dispatch, SetStateAction } from "react";

export interface IContext {
    token: string;
    setToken: Dispatch<SetStateAction<string>>;
    
    toogle: boolean,
    setToogle :Dispatch<SetStateAction<boolean>>
  }


export interface Irow{
  companySigDate : string
  companySignatureName: string
  documentName: string
  documentStatus: string
  documentType: string
  employeeNumber: string
  employeeSigDate: string
  employeeSignatureName:string
  id: string
}
 export interface IModal{
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>,
    createMode? :boolean,
    id?: string,
    row : Irow
  }
  
  