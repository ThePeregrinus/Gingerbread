import { useContext } from "react";
import {Navigate} from 'react-router-dom'
import { TokenContext } from "../context";
import { PathConstants } from "../routes";

export function Table(){
    const {token, setToken} = useContext(TokenContext)
    if(!token){
        return <Navigate to={PathConstants.HOME} />
    }
    return <h1>hello</h1>
    
}