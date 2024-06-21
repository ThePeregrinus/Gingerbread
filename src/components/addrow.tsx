import { Button } from "@mui/material"
import { useContext} from "react"

import { Context } from "../context"
import { addData } from "../utils/add-data"


export const AddRow = () =>{
    const {token, toogle, setToogle} = useContext(Context)
    return <Button color="inherit" onClick={()=>{
        addData(token)
        setToogle(!toogle)}
    }> Add new row</Button>
}