import { Button } from "@mui/material"
import { useContext, useState} from "react"

import { Context } from "../context"
import { addData } from "../utils/add-data"
import { BasicModal } from "./modal"

export const AddRow = () =>{
    const {token, toogle, setToogle} = useContext(Context)
    const [isOpen, setIsOpen] = useState(false)

    const setOpen = () => {
        setIsOpen(true)
    }

    const setClose = () => {
        setIsOpen(false)
    }

    return (
    <> 
        <Button color="inherit"  onClick={ setOpen
        }>Add new row</Button>
        <BasicModal open={isOpen} setOpen={setIsOpen}/>
    </>)
}