import { Button } from "@mui/material"
import { useContext} from "react"

import { Context } from "../context"
import { addData } from "../utils/add-data"

export const AddRow = () =>{
    const {toogle, setToogle} = useContext(Context)
    return <Button color="inherit" onClick={()=>{setToogle(!toogle)}}> Add new row</Button>
}