import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material"
import { useContext } from 'react';

import { Context } from '../context';
import { deleteData } from '../utils/delete-data';

export const DeleteButton = (id:any) =>{

    const { toogle, setToogle} = useContext(Context)
    return <Button color="inherit" onClick={()=>{    console.log(id)}}> < DeleteIcon/> </Button>
}