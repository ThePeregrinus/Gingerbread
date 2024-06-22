import { Button } from "@mui/material"
import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { Context } from "../context";
import { PathConstants } from "../routes";
export const Logout = () =>{
    const {setToken} = useContext(Context)
    const exit = () =>{
        localStorage.setItem('token', '')
        setToken('')
        return <Navigate to =  {PathConstants.HOME} />
    }
    return <Button color="inherit" onClick={exit}>
    Logout
</Button>}