import { Button } from "@mui/material"
import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { TokenContext } from "../context";
import { PathConstants } from "../routes";
export const Logout = () =>{
    const {token, setToken} = useContext(TokenContext)
    const exit = () =>{
        setToken('')
        return <Navigate to =  {PathConstants.HOME} />
    }
    return <Button color="inherit" onClick={exit}>
    Logout
</Button>}